import React from 'react';
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import SideBar from '@/components/SideBar';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import OurTeamSection from '@/components/OurTeamSection';
import FaqSection from '@/components/FaqSection';
import ImpeccableCtaSection from '@/components/ImpeccableCtaSection';
import { faqs } from '@/constants';

export default function Home() {
  const homeFaqs = {
    title: "Des millions de m² nettoyés, une expertise inégalée",
    subtitle: "FAQ",
    faqs: faqs,
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=800&auto=format&fit=crop",
    stat1: { number: '100+', text: 'Clients satisfaits' },
    stat2: { number: '16', text: 'Ans d\'expérience' },
  };

  return (
    <>
      <main>
        <Hero />
        <ProcessSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <OurTeamSection />
        <TestimonialsSection />
        <FaqSection {...homeFaqs} />
        <ImpeccableCtaSection />
        <BlogSection />
      </main>
      <SideBar />
    </>
  );
};