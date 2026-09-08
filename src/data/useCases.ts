import { UseCaseItem } from '../types';

export const useCasesList: UseCaseItem[] = [
  {
    id: "ecommerce",
    title: "E-commerce Brands",
    targetRole: "Merchants & DTC Stores",
    outcome: "Turn conversations into transactions and recover checkout drop-offs instantly.",
    description: "Equip your online store with Meta Catalog sync and in-chat Razorpay payment links. Receive order notifications the second an order is placed and send automated order confirmations.",
    highlights: [
      "Sync full product collections directly to WhatsApp chat interfaces",
      "Immediate checkout webhook notification triggers",
      "In-chat payment buttons with instant payment verification",
      "Order status notifications directly from Shopify & WooCommerce"
    ],
    channelSupport: "WhatsApp (Catalog & Payments)",
    icon: "ShoppingBag"
  },
  {
    id: "support",
    title: "Customer Support Teams",
    targetRole: "Support Leads & CX Teams",
    outcome: "Cut response latency and resolve routine inquiries without expanding headcount.",
    description: "Unify incoming customer inquiries across WhatsApp, Instagram, and Messenger in one team inbox. Let grounded AI handle recurring questions with automated human escalation.",
    highlights: [
      "Shared team inbox with live SSE streaming and 30s fallback",
      "AI Suggest Reply drafts contextual replies for agent approval",
      "24-hour Meta session window tracking prevents message delivery failures",
      "Granular agent routing, tag assignments, and conversation states"
    ],
    channelSupport: "WhatsApp, Instagram DM & Messenger",
    icon: "Headphones"
  },
  {
    id: "marketing",
    title: "Growth & Marketing Teams",
    targetRole: "Performance Marketers & Growth Leads",
    outcome: "Drive high-converting conversations with Click-to-WhatsApp ads and segmented broadcasts.",
    description: "Launch Click-to-WhatsApp ad structures created safely paused for review in Meta Ads Manager. Trace exact ad attribution in customer threads and broadcast updates to tag-filtered segments.",
    highlights: [
      "In-dashboard ad campaign creation (always paused for manual review)",
      "First-touch attribution tracking ad source, click ID, and campaign headline",
      "Segmented broadcast scheduling with zero external cron dependency",
      "Per-campaign delivered and read receipt metrics from official Meta hooks"
    ],
    channelSupport: "WhatsApp Only (Broadcasts & Ads)",
    icon: "Megaphone"
  },
  {
    id: "bookings",
    title: "Appointments & Services",
    targetRole: "Service Providers & Consultancies",
    outcome: "Automate booking schedules without double-booking under concurrent customer replies.",
    description: "Present live available service slots as interactive WhatsApp list messages. Our backend logic guarantees slot exclusivity so multiple simultaneous customer responses never book the same time.",
    highlights: [
      "Interactive WhatsApp list messages displaying real-time available slots",
      "Strict concurrency checks preventing double-booking collision",
      "Automated appointment confirmation and scheduled reminder broadcasts",
      "Seamless escalation to human agents if customer requests custom schedules"
    ],
    channelSupport: "WhatsApp Only",
    icon: "CalendarCheck"
  }
];
