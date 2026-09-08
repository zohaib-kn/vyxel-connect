export interface PricingTier {
  name: string;
  fee: number | string;
  period?: string;
  users: number | string;
  contacts: number | string;
  markup: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  bullets: string[];
  iconName: string;
  channelScope: 'whatsapp-only' | 'multi-channel' | 'developer';
  badgeText?: string;
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: 'E-commerce' | 'Payments' | 'Automation & Webhooks' | 'CRM & API';
  description: string;
  capabilities: string[];
  connectionType: string;
  icon: string;
  note?: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  targetRole: string;
  outcome: string;
  description: string;
  highlights: string[];
  channelSupport: string;
  icon: string;
}

export interface SecurityPillar {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
}
