"use client";
import dynamic from "next/dynamic";
import React from "react";
import { DynamicZoneManager } from "./DynamicZoneManager";

type ComponentMapping = {
  [key: string]: React.ComponentType<any>;
};
const componentMapping: ComponentMapping = {
  "dynamic-zone.hero": dynamic(() => import("@/components/Hero")),
  "dynamic-zone.process": dynamic(() => import("@/components/ProcessSection")),
  "dynamic-zone.service": dynamic(() => import("@/components/ServicesSection")),
  "dynamic-zone.why-us": dynamic(
    () => import("@/components/WhyChooseUsSection")
  ),
  "dynamic-zone.team": dynamic(() => import("@/components/OurTeamSection")),
  "dynamic-zone.testimonials": dynamic(
    () => import("@/components/TestimonialsSection")
  ),
  "dynamic-zone.faq": dynamic(() => import("@/components/FaqSection")),
  "dynamic-zone.blog": dynamic(() => import("@/components/BlogSection")),
};

export const HomePage = ({ pageData }: { pageData: any }) => {
  const dynamicZone = pageData?.dynamic_zone;
  return (
    <div>
      {dynamicZone && (
        <DynamicZoneManager
          dynamicZone={dynamicZone}
          componentMapping={componentMapping}
        />
      )}
    </div>
  );
};
