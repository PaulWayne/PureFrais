"use client";

import React, { useState } from 'react';
import { formSchema } from '@/lib/formSchema';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';

// Types
type Option = { value: string; label: string };
type Field = {
  id: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'checkbox' | 'date';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: Option[];
};
type FieldGroup = { id: string; group: Field[] };

const { form } = formSchema;

const initialFormData = () => {
  const data: { [key: string]: any } = {};
  form.fields.forEach(field => {
    if ('group' in field) {
      (field as any).group.forEach((subField: any) => { data[subField.id] = ''; });
    } else {
      data[(field as any).id] = '';
    }
  });
  Object.values(form.conditionalSections).forEach((section: any) => {
    section.fields.forEach((field: any) => { data[field.id] = ''; });
  });
  form.finalFields.forEach(field => {
    data[field.id] = field.type === 'checkbox' ? false : '';
  });
  return data;
};

const QuoteForm: React.FC = () => {
    const [formData, setFormData] = useState<{ [key: string]: any }>(initialFormData());
    const [prestation, setPrestation] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (id: string, value: any) => {
        setFormData(prev => ({ ...prev, [id]: value }));
        if (id === 'prestation') {
            setPrestation(value);
        }
        if (errors[id]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[id];
                return newErrors;
            });
        }
    };
    
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        const requiredFields: Field[] = [];

        // Main prestation field
        const prestationField = form.fields.find(f => f.id === 'prestation') as Field;
        if(prestationField.required) requiredFields.push(prestationField);

        // Common fields
        const commonFields = form.fields.find(f => f.id === 'commonFields') as any;
        // FIX: Cast field to `Field` to match the `requiredFields` array type.
        commonFields.group.forEach((f: any) => { if (f.required) requiredFields.push(f as Field) });

        // Conditional fields
        if (prestation && form.conditionalSections[prestation]) {
            // FIX: Cast field to `Field` to match the `requiredFields` array type.
            form.conditionalSections[prestation].fields.forEach((f: any) => { if (f.required) requiredFields.push(f as Field) });
        }

        // Final fields
        // FIX: Cast field to `Field` to match the `requiredFields` array type.
        form.finalFields.forEach(f => { if (f.required) requiredFields.push(f as Field) });

        requiredFields.forEach(field => {
            if (field.type === 'checkbox' && !formData[field.id]) {
                newErrors[field.id] = 'Vous devez accepter les conditions.';
            } else if (typeof formData[field.id] === 'string' && !formData[field.id].trim()) {
                newErrors[field.id] = 'Ce champ est requis.';
            }
        });
        
        // Email validation
        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "L'adresse email n'est pas valide.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        
        setStatus('loading');
        
        const allData = { ...formData };
        const conditionalFieldsData: { [key: string]: any } = {};
        if (prestation && form.conditionalSections[prestation]) {
            form.conditionalSections[prestation].fields.forEach(field => {
                conditionalFieldsData[field.id] = formData[field.id];
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
                payload[key] = allData[fieldId] || '';
            }
        }

        try {
            // NOTE: This is a mock API call. The endpoint /api/devis does not actually exist.
            // This will result in a 404 error in the console, which is expected behavior for this example.
            const response = await fetch(form.submission.endpoint, {
                method: form.submission.method as 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: payload }) // Strapi often expects a `data` wrapper
            });

            if (!response.ok) throw new Error('Network response was not ok');
            
            setStatus('success');
            setFormData(initialFormData());
            setPrestation('');
            setErrors({});
        } catch (error) {
            console.error('Submission failed', error);
            setStatus('error');
        }
    };
    
    const renderField = (field: Field) => {
      const { id, type, label, placeholder, required, options } = field;
      const value = formData[id];
      const error = errors[id];

      const fieldComponent = () => {
        switch(type) {
            case 'text':
            case 'email':
            case 'tel':
            case 'number':
            case 'date':
                return <Input id={id} name={id} type={type} placeholder={placeholder} required={required} value={value} onChange={e => handleChange(id, e.target.value)} aria-invalid={!!error} />;
            case 'select':
                return <Select id={id} name={id} placeholder={placeholder} required={required} options={options || []} value={value} onChange={e => handleChange(id, e.target.value)} aria-invalid={!!error} />;
            case 'textarea':
                return <Textarea id={id} name={id} placeholder={placeholder} required={required} value={value} onChange={e => handleChange(id, e.target.value)} aria-invalid={!!error} />;
            case 'checkbox':
                return <Checkbox id={id} name={id} label={label} required={required} checked={!!value} onChange={e => handleChange(id, e.target.checked)} aria-invalid={!!error} />;
            default:
                return null;
        }
      }

      return (
        <div key={id} className="mb-6">
          {type !== 'checkbox' && <Label htmlFor={id} required={required}>{label}</Label>}
          {fieldComponent()}
          {error && <p className="text-sm text-brand-red mt-1" id={`${id}-error`}>{error}</p>}
        </div>
      );
    }
    
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

            <form onSubmit={handleSubmit} noValidate>
                {renderField(prestationField)}
                
                <hr className="my-8"/>

                {/* FIX: Cast field to `Field` to satisfy the `renderField` function's type requirement. */}
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
                            {/* FIX: Cast field to `Field` to satisfy the `renderField` function's type requirement. */}
                            {currentConditionalSection.fields.map((field: any) => renderField(field as Field))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <hr className="my-8"/>
                
                {/* FIX: Cast field to `Field` to satisfy the `renderField` function's type requirement. */}
                {finalFields.map(field => renderField(field as Field))}
                
                <div className="mt-8">
                    <Button type="submit" isLoading={status === 'loading'}>
                        {form.submitLabel}
                    </Button>
                </div>
                
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-4 text-center p-4 bg-green-100 text-green-800 rounded-lg"
                            role="alert"
                        >
                            Merci ! Votre demande de devis a été envoyée avec succès. Nous vous contacterons bientôt.
                        </motion.div>
                    )}
                     {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-4 text-center p-4 bg-red-100 text-red-800 rounded-lg"
                            role="alert"
                        >
                            Une erreur est survenue. Veuillez réessayer plus tard ou nous contacter directement.
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    )
};

export default QuoteForm;