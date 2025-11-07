import dynamic from "next/dynamic";

export type ComponentMapping = {
  [key: string]: React.ComponentType<any>;
};

const componentMapping: ComponentMapping = {
  "dynamic-zone.expert-cleaning": dynamic(
    () => import("@/components/ExpertCleaningSection")
  ),
  "dynamic-zone.service": dynamic(
    () => import("@/components/CleanlinessSection")
  ),
  "dynamic-zone.team": dynamic(() => import("@/components/AboutTeamSection")),
  "dynamic-zone.faq": dynamic(() => import("@/components/FaqSection")),
  "dynamic-zone.blog": dynamic(
    () => import("@/components/CleaningTipsSection")
  ),
  "dynamic-zone.leader-word": dynamic(
    () => import("@/components/TailoredSolutionsCta")
  ),
};

import React from "react";
import { DynamicZoneManager } from "./DynamicZoneManager";

const About = ({ pageData }: { pageData: any }) => {
  const dynamicZone = pageData?.dynamic_zone;

  return (
    <div>
      {dynamicZone && (
        <DynamicZoneManager
          componentMapping={componentMapping}
          dynamicZone={dynamicZone}
        />
      )}
    </div>
  );
};

export default About;
