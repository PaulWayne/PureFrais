import { z } from "zod";

export const quoteFormSchema = z
  .object({
    prestation: z
      .string({ message: "Ce champ est requis." })
      .min(1, "Veuillez choisir une prestation."),
    nom: z
      .string({ message: "Ce champ est requis." })
      .min(1, "Ce champ est requis."),
    email: z.email("L'adresse email n'est pas valide."),
    telephone: z.string().optional().or(z.literal("")),
    localisation: z.string().optional().or(z.literal("")),

    // Restaurant
    type_nettoyage: z.string().optional().or(z.literal("")),
    superficie: z.string().optional().or(z.literal("")),
    type_intervention: z.string().optional().or(z.literal("")),
    date_souhaitee: z.string().optional().or(z.literal("")),

    // Local pro
    type_local: z.string().optional().or(z.literal("")),
    // 'superficie' and 'type_intervention' are shared with restaurant

    // Hotte
    nombre_hottes: z.coerce.number().optional().nullable(),
    type_etablissement: z.string().optional().or(z.literal("")),
    longueur: z.string().optional().or(z.literal("")),
    encrassement: z.string().optional().or(z.literal("")),
    derniere_visite: z.string().optional().or(z.literal("")),

    // Vitres
    type_lieu: z.string().optional().or(z.literal("")),
    type_vitres: z.string().optional().or(z.literal("")),
    surface: z.string().optional().or(z.literal("")),
    accessibilite: z.string().optional().or(z.literal("")),
    frequence: z.string().optional().or(z.literal("")),

    // Final fields
    message: z.string().optional().or(z.literal("")),
    accept_rgpd: z.boolean().refine((val) => val === true, {
      message: "Vous devez accepter les conditions.",
    }),
  })
  .superRefine((data, ctx) => {
    switch (data.prestation) {
      case "restaurant":
        if (!data.type_nettoyage) {
          ctx.addIssue({
            path: ["type_nettoyage"],
            code: "custom",
            message: "Le type de nettoyage est requis pour un restaurant.",
          });
        }
        if (!data.superficie) {
          ctx.addIssue({
            path: ["superficie"],
            code: "custom",
            message: "La superficie est requise.",
          });
        }
        if (!data.type_intervention) {
          ctx.addIssue({
            path: ["type_intervention"],
            code: "custom",
            message: "Le type d'intervention est requis.",
          });
        }
        break;
      case "local_pro":
        if (!data.type_local) {
          ctx.addIssue({
            path: ["type_local"],
            code: "custom",
            message: "Le type de local est requis pour un restaurant.",
          });
        }
        if (!data.superficie) {
          ctx.addIssue({
            path: ["superficie"],
            code: "custom",
            message: "La superficie est requise.",
          });
        }
        if (!data.type_intervention) {
          ctx.addIssue({
            path: ["type_intervention"],
            code: "custom",
            message: "Le type d'intervention est requis.",
          });
        }
        break;
      case "vitres":
        if (!data.nombre_hottes) {
          ctx.addIssue({
            path: ["nombre_hottes"],
            code: "custom",
            message: "Le nombre de hottes est requis pour un restaurant.",
          });
        }
        if (!data.type_etablissement) {
          ctx.addIssue({
            path: ["type_etablissement"],
            code: "custom",
            message: "Le type d'etablissement est requis.",
          });
        }
        if (!data.longueur) {
          ctx.addIssue({
            path: ["longueur"],
            code: "custom",
            message: "La longueur de la hotte  est requise.",
          });
        }
        if (!data.encrassement) {
          ctx.addIssue({
            path: ["encrassement"],
            code: "custom",
            message: "Le niveau d'encrassement de la hotte  est requis.",
          });
        }
        if (!data.derniere_visite) {
          ctx.addIssue({
            path: ["derniere_visite"],
            code: "custom",
            message: "La periode de la dernière visite est requise.",
          });
        }
        break;
      case "hotte":
        if (!data.type_lieu) {
          ctx.addIssue({
            path: ["type_lieu"],
            code: "custom",
            message: "Le lieu est requis pour un nettoyage de vitres.",
          });
        }
        if (!data.type_vitres) {
          ctx.addIssue({
            path: ["type_vitres"],
            code: "custom",
            message: "Le type de vitres est requis.",
          });
        }
        if (!data.surface) {
          ctx.addIssue({
            path: ["surface"],
            code: "custom",
            message: "La surface est requise.",
          });
        }
        if (!data.accessibilite) {
          ctx.addIssue({
            path: ["accessibilite"],
            code: "custom",
            message: "Le niveau d'accessibilite est requis.",
          });
        }
        if (!data.derniere_visite) {
          ctx.addIssue({
            path: ["derniere_visite"],
            code: "custom",
            message: "La periode de la dernière visite est requise.",
          });
        }
        break;
    }
  });

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
