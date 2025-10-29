

import AboutHero from '@/components/AboutHero';
import ExpertCleaningSection from '@/components/ExpertCleaningSection';
import CleanlinessSection from '@/components/CleanlinessSection';
import AboutTeamSection from '@/components/AboutTeamSection';
import TailoredSolutionsCta from '@/components/TailoredSolutionsCta';
import FaqSection from '@/components/FaqSection';
import { faqs } from '@/constants';
import CleaningTipsSection from '@/components/CleaningTipsSection';

export default function AboutUsPage() {
  const aboutFaqs = {
      title: "Des processus de nettoyage parfaits",
      faqs: faqs,
      image: "https://storage.googleapis.com/aai-web-samples/public/pro-builder/perfect-cleaning-process.png",
      stat1: { number: '18+', text: 'Collaborateurs experts', label: 'Personnes' },
      stat2: { number: '10', text: 'd\'excellence', label: 'Années' },
  };

  return (
    <main>
      <AboutHero />
      <ExpertCleaningSection />
      <CleanlinessSection />
      <AboutTeamSection />
      <FaqSection {...aboutFaqs} />
      <CleaningTipsSection />
      <TailoredSolutionsCta />
    </main>
  );
}