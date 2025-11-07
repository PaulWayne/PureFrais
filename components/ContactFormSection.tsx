"use client";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { ContactFormData, contactFormSchema } from "@/lib/contactFormValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { CompanyInformation } from "@/types/contact";
import { getStrapiURL } from "@/lib/utils";

const baseUri = getStrapiURL();

type Props = {
  info: CompanyInformation;
};
const defaultValues: ContactFormData = {
  fullname: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  agree: false,
};

const ContactFormSection: React.FC<Props> = ({ info }) => {
  const { address, email, phone } = info;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    if (!executeRecaptcha) {
      setStatus("error");
      return;
    }
    try {
      const recaptchaToken = await executeRecaptcha("contact_form");
      const url = new URL("/api/contacts", baseUri);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            ...data,
            recaptchaToken,
          },
        }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Submission failed", error);
      setStatus("error");
    }
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <section className="py-10 lg:py-15 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">
                Coordonnées
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>{address}</p>
                <p>{email}</p>
                <p className="text-2xl font-bold text-brand-dark-blue mt-4">
                  {phone}
                </p>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-brand-dark-blue hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-brand-dark-blue hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-brand-dark-blue hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                  <div>
                    <Label htmlFor="fullname">Nom</Label>
                    <Input
                      id="fullname"
                      type="text"
                      placeholder="Ex : Jean Dupont"
                      {...register("fullname")}
                    />
                    {errors.fullname && (
                      <p className="text-sm text-brand-red mt-1">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Adresse e-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ex : contact@exemple.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-brand-red mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Ex : 0601020304"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-sm text-brand-red mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Sujet de votre message"
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <p className="text-sm text-brand-red mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Comment pouvons-nous vous aider ? N'hésitez pas à nous contacter !"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-brand-red mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="mb-8">
                  <Label>
                    {
                      <>
                        J'accepte que mes données soient{" "}
                        <a
                          href="#"
                          className="underline hover:text-brand-dark-blue"
                        >
                          collectées et stockées
                        </a>
                        .
                      </>
                    }
                  </Label>
                  <Checkbox
                    id="agree-contact"
                    checked={!!watch("agree")}
                    onCheckedChange={(val) =>
                      setValue("agree", val === true, { shouldValidate: true })
                    }
                  />
                  {errors.agree && (
                    <p className="text-sm text-brand-red mt-1">
                      {errors.agree.message}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting}>
                  Envoyer le Message
                </Button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-4 text-center p-4 bg-green-100 text-green-800 rounded-lg"
                      role="alert"
                    >
                      Merci ! Votre message a été envoyé avec succès. Nous vous
                      contacterons bientôt.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-4 text-center p-4 bg-red-100 text-red-800 rounded-lg"
                      role="alert"
                    >
                      Une erreur est survenue. Veuillez réessayer plus tard ou
                      nous contacter directement.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>
    </GoogleReCaptchaProvider>
  );
};

export default ContactFormSection;
