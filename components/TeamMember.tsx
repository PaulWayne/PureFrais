"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fullTeamMembers } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { TeamMember } from "@/types/team";
import Image from "next/image";

// Component for the animated skill progress bar
// FIX: Changed component definition to use React.FC to correctly handle React-specific props like 'key'.
const SkillBar: React.FC<{ name: string; percentage: number }> = ({
  name,
  percentage,
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Trigger animation when component is in view
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-brand-dark-blue">{name}</span>
        <span className="text-sm font-bold text-brand-dark-blue">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-brand-green h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
type Props = {
  data: TeamMember;
};
export default function TeamMemberPage({ data }: Props) {
  const { firstname, lastname, bio, job, skills, quote, image, contact } = data;
  const member = fullTeamMembers[0];

  if (!member) {
    notFound();
  }

  return (
    <main>
      <div className="bg-slate-50/70 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Top Section */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Image & Name */}
            <div className="lg:col-span-5 text-center">
              <p className="font-semibold text-gray-500 tracking-widest uppercase mb-2">
                {job}
              </p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">
                {`${firstname} ${lastname}`}
              </h1>
              <div className="relative inline-block mt-8">
                <Image
                  unoptimized
                  src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                  alt={`${firstname} ${lastname}`}
                  className="rounded-lg shadow-xl w-full h-auto max-w-sm mx-auto"
                  width={image.formats.medium.width}
                  height={image.formats.medium.height}
                />
              </div>
            </div>

            {/* Right Side: Skills & Quote */}
            <div className="lg:col-span-7">
              <div className="space-y-6 mb-10">
                {skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <i className="fas fa-quote-left text-5xl text-gray-200 absolute top-4 left-6"></i>
                <div className="relative z-10 grid sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-600 text-sm leading-relaxed">
                  {quote.split("*").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Biography */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">
                Biographie
              </h2>
              <p className="text-gray-600 mb-8">{bio}</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-brand-teal mr-4 text-xl"></i>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-700 hover:text-brand-dark-blue"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-brand-teal mr-4 text-xl"></i>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-gray-700 hover:text-brand-dark-blue"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Prêt pour un Espace Impeccable ?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-300">
              Notre équipe de professionnels est prête à vous fournir des
              services de nettoyage de première qualité. Contactez-nous dès
              aujourd'hui pour un devis gratuit et sans engagement.
            </p>
            <Link
              href="/devi"
              className="inline-block bg-brand-teal text-white font-bold py-4 px-10 rounded-lg hover:opacity-90 transition-opacity shadow-xl text-lg"
            >
              Obtenir un Devis Gratuit
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
                .social-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    border: 1px solid #e5e7eb;
                    color: #6b7280;
                    transition: all 0.2s;
                }
                .social-icon:hover {
                    background-color: #0A2540;
                    color: white;
                    border-color: #0A2540;
                }
            `}</style>
    </main>
  );
}
