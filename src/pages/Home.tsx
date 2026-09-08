import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ChannelStrip } from '../components/sections/ChannelStrip';
import { ModuleExplorer } from '../components/sections/ModuleExplorer';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { HowItWorks } from '../components/sections/HowItWorks';
import { UnifiedInbox } from '../components/sections/UnifiedInbox';
import { AIChatbot } from '../components/sections/AIChatbot';
import { Broadcasts } from '../components/sections/Broadcasts';
import { Commerce } from '../components/sections/Commerce';
import { AdsAttribution } from '../components/sections/AdsAttribution';
import { DeveloperPlatform } from '../components/sections/DeveloperPlatform';
import { IntegrationsSection } from '../components/sections/IntegrationsSection';
import { SecuritySection } from '../components/sections/SecuritySection';
import { PricingSection } from '../components/sections/PricingSection';
import { WhyVyxel } from '../components/sections/WhyVyxel';
import { UseCasesSection } from '../components/sections/UseCasesSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ChannelStrip />
      <ModuleExplorer />
      <ProblemSolution />
      <HowItWorks />
      <UnifiedInbox />
      <AIChatbot />
      <Broadcasts />
      <Commerce />
      <AdsAttribution />
      <DeveloperPlatform />
      <IntegrationsSection />
      <SecuritySection />
      <PricingSection />
      <WhyVyxel />
      <UseCasesSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
};
