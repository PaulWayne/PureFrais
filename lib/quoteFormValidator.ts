import { z } from 'zod';

export const quoteFormSchema = z.object({
    prestation: z.string({ required_error: "Ce champ est requis." }).min(1, "Veuillez choisir une prestation."),
    nom: z.string({ required_error: "Ce champ est requis." }).min(1, "Ce champ est requis."),
    email: z.string({ required_error: "Ce champ est requis." }).email("L'adresse email n'est pas valide."),
    telephone: z.string().optional().or(z.literal('')),
    localisation: z.string().optional().or(z.literal('')),

    // Restaurant
    type_nettoyage: z.string().optional().or(z.literal('')),
    superficie: z.string().optional().or(z.literal('')),
    type_intervention: z.string().optional().or(z.literal('')),
    date_souhaitee: z.string().optional().or(z.literal('')),

    // Local pro
    type_local: z.string().optional().or(z.literal('')),
    // 'superficie' and 'type_intervention' are shared with restaurant

    // Hotte
    nombre_hottes: z.coerce.number().optional().nullable(),
    type_etablissement: z.string().optional().or(z.literal('')),
    longueur: z.string().optional().or(z.literal('')),
    encrassement: z.string().optional().or(z.literal('')),
    derniere_visite: z.string().optional().or(z.literal('')),

    // Vitres
    type_lieu: z.string().optional().or(z.literal('')),
    type_vitres: z.string().optional().or(z.literal('')),
    surface: z.string().optional().or(z.literal('')),
    accessibilite: z.string().optional().or(z.literal('')),
    frequence: z.string().optional().or(z.literal('')),

    // Final fields
    message: z.string().optional().or(z.literal('')),
    accept_rgpd: z.boolean().refine(val => val === true, {
        message: "Vous devez accepter les conditions."
    }),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
