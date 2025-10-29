"use client";
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { fullTeamMembers } from '@/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Component for the animated skill progress bar
// FIX: Changed component definition to use React.FC to correctly handle React-specific props like 'key'.
const SkillBar: React.FC<{ name: string, percentage: number }> = ({ name, percentage }) => {
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
                <span className="text-sm font-bold text-brand-dark-blue">{percentage}%</span>
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

// Contact form input component from ContactFormSection.tsx for reusability
const ContactInput = ({ icon, type, placeholder, name }: { icon: string, type: string, placeholder: string, name: string }) => (
    <div className="flex items-center border-b border-gray-200 py-2 focus-within:border-brand-teal transition-colors">
        <i className={`fas fa-${icon} text-gray-400 mr-3 w-4 text-center`}></i>
        <input 
            type={type} 
            name={name}
            placeholder={placeholder}
            className="w-full bg-transparent focus:outline-none placeholder-gray-500 text-sm"
        />
    </div>
);


export default function TeamMemberPage({ params }: { params: { id: string } }) {
    const member = fullTeamMembers.find(m => m.id === params.id);

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
                            <p className="font-semibold text-gray-500 tracking-widest uppercase mb-2">{member.title}</p>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">{member.name}</h1>
                            <div className="relative inline-block mt-8">
                                <img src={member.image} alt={member.name} className="rounded-lg shadow-xl w-full max-w-sm mx-auto" />
                                <div className="flex justify-center gap-3 mt-6">
                                    <a href={member.socials.facebook} className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                    <a href={member.socials.twitter} className="social-icon"><i className="fab fa-twitter"></i></a>
                                    <a href={member.socials.instagram} className="social-icon"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Skills & Quote */}
                        <div className="lg:col-span-7">
                            <div className="space-y-6 mb-10">
                                {member.skills.map(skill => (
                                    <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
                                ))}
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-lg relative">
                                <i className="fas fa-quote-left text-5xl text-gray-200 absolute top-4 left-6"></i>
                                <div className="relative z-10 grid sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-600 text-sm leading-relaxed">
                                    {member.quote.map((p, i) => <p key={i}>{p}</p>)}
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
                            <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Biographie</h2>
                            <p className="text-gray-600 mb-8">{member.bio}</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-brand-teal mr-4 text-xl"></i>
                                    <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-brand-dark-blue">{member.email}</a>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-brand-teal mr-4 text-xl"></i>
                                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-brand-dark-blue">{member.phone}</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-brand-dark-blue mb-8">Formulaire de Contact</h2>
                            <form className="space-y-6">
                                <ContactInput icon="user" type="text" name="name" placeholder="Nom" />
                                <ContactInput icon="envelope" type="email" name="email" placeholder="Adresse e-mail" />
                                 <div className="flex items-start border-b border-gray-200 py-2 focus-within:border-brand-teal transition-colors">
                                    <i className="fas fa-pen text-gray-400 mr-3 w-4 text-center mt-1"></i>
                                    <textarea 
                                      name="message" 
                                      placeholder="Comment pouvons-nous vous aider ? N'hésitez pas à nous contacter !" 
                                      rows={2}
                                      className="w-full bg-transparent focus:outline-none resize-none placeholder-gray-500 text-sm"
                                    ></textarea>
                                </div>
                                <button type="submit" className="bg-brand-teal text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto">
                                  Envoyer le Message
                                </button>
                            </form>
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
                    Notre équipe de professionnels est prête à vous fournir des services de nettoyage de première qualité. Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
                  </p>
                  <Link 
                    href="/contacts" 
                    className="inline-block bg-brand-teal text-white font-bold py-4 px-10 rounded-lg hover:opacity-90 transition-opacity shadow-xl text-lg"
                  >
                    Obtenir un Devis Gratuit
                  </Link>
                </motion.div>
              </div>
            </section>
            
             <style jsx>{`
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