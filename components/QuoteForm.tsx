"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema as formDefinition } from '@/lib/formSchema';
import { quoteFormSchema, QuoteFormData } from '@/lib/quoteFormValidator';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';

// Types from form schema definition
type Option = { value: string; label: string };
type Field = {
  id: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'checkbox' | 'date';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: Option[];
};

const { form } = formDefinition;

const defaultValues: Partial<QuoteFormData> = {
    prestation: undefined,
    nom: '', email: '', telephone: '', localisation: '', message: '',
    accept_rgpd: false, type_nettoyage: '', superficie: '', type_intervention: '',
    date_souhaitee: '', type_local: '', nombre_hottes: undefined, type_etablissement: '',
    longueur: '', encrassement: '', derniere_visite: '', type_lieu: '', type_vitres: '',
    surface: '', accessibilite: '', frequence: '',
};


const QuoteForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteFormSchema),
        defaultValues,
    });

    const prestation = watch('prestation');

    const onSubmit = async (data: QuoteFormData) => {
        setStatus('idle');
        
        const conditionalFieldsData: { [key: string]: any } = {};
        const prestationKey = data.prestation as keyof typeof form.conditionalSections;
        if (prestationKey && form.conditionalSections[prestationKey]) {
            form.conditionalSections[prestationKey].fields.forEach(field => {
                conditionalFieldsData[field.id] = data[field.id as keyof QuoteFormData];
            });
        }

        const payload: { [key: string]: any } = {};
        const format = form.submission.payloadFormat as { [key: string]: string };

        for (const key in format) {
            const template = format[key];
            const fieldId = template.replace(/{{|}}/g, '');
            if (fieldId === 'conditionalSectionFields') {
                payload[key] = conditionalFieldsData;
            } else {
                payload[key] = data[fieldId as keyof QuoteFormData] || '';
            }
        }

        try {
            // NOTE: This is a mock API call. The endpoint /api/devis does not actually exist.
            // This will result in a 404 error in the console, which is expected behavior for this example.
            const response = await fetch(form.submission.endpoint, {
                method: form.submission.method as 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: payload })
            });

            if (!response.ok) throw new Error('Network response was not ok');
            
            setStatus('success');
            reset();
        } catch (error) {
            console.error('Submission failed', error);
            setStatus('error');
        }
    };

    const renderField = (field: Field) => {
        const { id, type, label, placeholder, required, options } = field;
        const error = errors[id as keyof QuoteFormData];

        const fieldComponent = () => {
            const fieldName = id as keyof QuoteFormData;
            switch(type) {
                case 'text':
                case 'email':
                case 'tel':
                case 'number':
                case 'date':
                    return <Input id={id} type={type} placeholder={placeholder} {...register(fieldName)} aria-invalid={!!error} />;
                case 'select':
                    return <Select id={id} placeholder={placeholder} options={options || []} {...register(fieldName)} aria-invalid={!!error} />;
                case 'textarea':
                    return <Textarea id={id} placeholder={placeholder} {...register(fieldName)} aria-invalid={!!error} />;
                case 'checkbox':
                    return <Checkbox id={id} label={label} required={required} {...register(fieldName)} aria-invalid={!!error} />;
                default:
                    return null;
            }
        };

        return (
            <div key={id} className="mb-6">
                {type !== 'checkbox' && <Label htmlFor={id} required={required}>{label}</Label>}
                {fieldComponent()}
                {error && <p className="text-sm text-brand-red mt-1" id={`${id}-error`}>{error.message as string}</p>}
            </div>
        );
    };
    
    const prestationField = form.fields.find(f => f.id === 'prestation') as Field;
    const commonFields = (form.fields.find(f => f.id === 'commonFields') as any).group;
    const finalFields = form.finalFields;
    const currentConditionalSection = prestation ? form.conditionalSections[prestation] : null;

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark-blue">{form.title}</h2>
                <p className="text-gray-600 mt-2">{form.description}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {renderField(prestationField)}
                <hr className="my-8"/>
                {commonFields.map((field: any) => renderField(field as Field))}
                <AnimatePresence mode="wait">
                    {currentConditionalSection && (
                        <motion.div
                            key={prestation}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <hr className="my-8"/>
                            <h3 className="text-xl font-bold text-brand-dark-blue mb-6">{currentConditionalSection.label}</h3>
                            {currentConditionalSection.fields.map((field: any) => renderField(field as Field))}
                        </motion.div>
                    )}
                </AnimatePresence>
                <hr className="my-8"/>
                {finalFields.map(field => renderField(field as Field))}
                <div className="mt-8">
                    <Button type="submit" isLoading={isSubmitting}>
                        {form.submitLabel}
                    </Button>
                </div>
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-4 text-center p-4 bg-green-100 text-green-800 rounded-lg" role="alert">
                            Merci ! Votre demande de devis a été envoyée avec succès. Nous vous contacterons bientôt.
                        </motion.div>
                    )}
                     {status === 'error' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-4 text-center p-4 bg-red-100 text-red-800 rounded-lg" role="alert">
                            Une erreur est survenue. Veuillez réessayer plus tard ou nous contacter directement.
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};

export default QuoteForm;
