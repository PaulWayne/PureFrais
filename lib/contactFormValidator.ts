import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z
    .string({ message: "Le nom est requis." })
    .min(1, "Le nom est requis."),
  email: z
    .string({ message: "L'email est requis." })
    .email("L'adresse email n'est pas valide."),
  phone: z.string().optional().or(z.literal("")),
  subject: z.string().optional().or(z.literal("")),
  message: z
    .string({ message: "Le message est requis." })
    .min(1, "Le message ne peut pas être vide."),
  agree: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
