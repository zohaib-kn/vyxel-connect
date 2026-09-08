import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    fee: 999,
    period: "/month",
    users: 3,
    contacts: 500,
    markup: "20%",
    description: "For small teams and growing merchants getting started with official WhatsApp Business API access.",
    popular: false,
    features: [
      "3 team agent seats",
      "500 active contacts included",
      "Official Meta WhatsApp API access",
      "Shared inbox (WhatsApp, Instagram, Messenger)",
      "Rule-based chatbot automation (WhatsApp)",
      "Template message builder & sync",
      "Pay-per-use: Meta cost + 20% transparent markup"
    ],
    ctaText: "Start free trial",
    ctaLink: "#get-started"
  },
  {
    name: "Growth",
    fee: 2499,
    period: "/month",
    users: 15,
    contacts: 5000,
    markup: "15%",
    description: "For scaling customer support, marketing broadcasts, and e-commerce transactions.",
    popular: true,
    features: [
      "15 team agent seats",
      "5,000 active contacts included",
      "Visual drag-and-drop multi-turn chatbot builder",
      "Vyxel AI assistant with knowledge base grounding",
      "WhatsApp Catalog sync & in-chat payment links",
      "Click-to-WhatsApp campaign creation (paused for review)",
      "Tag-based broadcast scheduling & delivery receipts",
      "Pay-per-use: Meta cost + 15% transparent markup"
    ],
    ctaText: "Start free trial",
    ctaLink: "#get-started"
  },
  {
    name: "Scale",
    fee: 4999,
    period: "/month",
    users: 40,
    contacts: 25000,
    markup: "10%",
    description: "For high-volume operations requiring full developer platform access, webhooks, and team routing.",
    popular: false,
    features: [
      "40 team agent seats",
      "25,000 active contacts included",
      "Full REST API access (API key authenticated)",
      "Outbound HMAC-signed webhooks",
      "Shopify & WooCommerce real-time notifications",
      "Appointment booking with concurrent collision prevention",
      "Webhook health panel with 1-click replay",
      "Pay-per-use: Meta cost + 10% transparent markup"
    ],
    ctaText: "Start free trial",
    ctaLink: "#get-started"
  },
  {
    name: "Enterprise",
    fee: "Talk to sales",
    period: "",
    users: "Unlimited",
    contacts: "Unlimited",
    markup: "5% or flat",
    description: "For established enterprises with high-throughput messaging, custom SLAs, and multi-tenant setup.",
    popular: false,
    features: [
      "Unlimited team agent seats",
      "Unlimited contacts directory",
      "Multi-WABA & multiple WhatsApp numbers support",
      "Custom throughput and dedicated sending queues",
      "Tailored security reviews & SLA guarantees",
      "Dedicated account onboarding specialist",
      "Pay-per-use: Meta cost + 5% markup or negotiable flat rate"
    ],
    ctaText: "Contact sales",
    ctaLink: "/contact"
  }
];

export const pricingNotice = {
  headline: "Zero hidden fees. You see exactly what Meta charges.",
  subtext: "Unlike legacy aggregators who bundle mysterious per-conversation surcharges, Vyxel Connect passes Meta's exact official conversation rates directly to your bill with a single, published markup.",
  disclaimer: "Note: Pricing tiers shown represent our recommended proposal. Shipped tenant billing models may support credit/wallet overage billing.",
  workedExample: {
    title: "Illustrative Message Cost Example (India Marketing)",
    conversationCount: 1200,
    metaCostPerConv: "₹0.78",
    totalMetaCost: "₹936",
    markupOnGrowth: "15% (₹140.40)",
    totalBilledForMessages: "₹1,076.40",
    note: "Illustrative example based on prevailing Meta India marketing rates. Final message charges depend on Meta's official category rate and customer destination country."
  }
};

export const pricingFaqs = [
  {
    question: "How does message billing work?",
    answer: "You pay a predictable monthly platform fee for seats, contact management, inbox tools, and automation. Any conversation messages you send are billed pay-per-use directly at Meta's published wholesale cost plus the transparent markup percentage of your plan."
  },
  {
    question: "Do you markup Meta's rates secretly?",
    answer: "Never. You see the exact itemized Meta charge in your usage dashboard. Our markup is 100% transparent and clearly shown on your invoice."
  },
  {
    question: "Can I bring my existing WhatsApp Business Account (WABA)?",
    answer: "Yes. You can onboard in seconds using Meta Embedded Signup (Facebook Login for Business) or manually enter your existing WABA ID without needing separate Meta Tech Provider approval."
  },
  {
    question: "Are chatbot automations and catalog features available on Instagram?",
    answer: "No. In strict adherence to our product capabilities, visual chatbot rules, broadcasts, catalog sync, and payment links are WhatsApp-only. Instagram and Messenger currently support plain-text two-way messaging inside the shared team inbox."
  },
  {
    question: "What happens if our team exceeds the monthly contact quota?",
    answer: "Your service is never abruptly interrupted. Contacts exceeding your plan's included tier are billed through convenient wallet-based overages or you can upgrade to the next tier with one click."
  }
];
