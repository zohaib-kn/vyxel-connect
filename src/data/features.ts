import { FeatureItem } from '../types';

export const featureCatalog: FeatureItem[] = [
  {
    id: "inbox",
    category: "Conversations",
    title: "Unified Team Inbox",
    headline: "Handle WhatsApp, Instagram, and Messenger in one synchronized workspace.",
    description: "Consolidate customer inquiries into a single real-time stream. Keep context continuous across handoffs with live status, agent routing, and explicit 24h Meta session timers.",
    bullets: [
      "Real-time event streaming via Server-Sent Events (SSE) with automatic 30s polling fallback",
      "Strict 24-hour session window indicator: automatically switches between free-text and approved template input",
      "Manual conversation tagging and 'Assign to' picker for structured agent routing",
      "Ad-source attribution badges displayed directly inside the conversation thread ('via ad: ...')",
      "AI Suggest Reply copilot button: synthesizes past thread context into draft responses for agent review"
    ],
    iconName: "Inbox",
    channelScope: "multi-channel",
    badgeText: "Multi-Channel"
  },
  {
    id: "contacts",
    category: "Audience",
    title: "Contacts & Custom Segmentation",
    headline: "Maintain searchable customer records with opt-in status and dynamic tags.",
    description: "Centralize customer data without cumbersome external syncs. Track opt-in compliance, attach key-value custom attributes, and build reusable segments for targeted campaigns.",
    bullets: [
      "Searchable contact directory across name, phone number, and conversation status",
      "Explicit opt-in tracking to protect Meta quality rating and ensure compliance",
      "Arbitrary key/value custom fields per contact (e.g., customer tier, city, order ID)",
      "Bulk CSV contact import for rapid customer onboarding",
      "Tag-based segments dynamically available across broadcasts and automated routing rules"
    ],
    iconName: "Users",
    channelScope: "multi-channel"
  },
  {
    id: "templates",
    category: "Meta Approved Content",
    title: "Visual Template Builder & Sync",
    headline: "Compose, preview, and sync official Meta message templates in one click.",
    description: "Design multi-format WhatsApp message templates with live validation. Reconcile approval statuses directly from Meta servers without jumping between consoles.",
    bullets: [
      "Visual template composer supporting category, language, header, body, and footer sections",
      "Support for multiple header types: text, image, video, and PDF documents with resumable media uploads",
      "Instant 'Sync from Meta' button to reconcile pending, approved, or rejected statuses",
      "Surfaced rejection reasons directly in the UI to facilitate rapid fixes and resubmissions"
    ],
    iconName: "FileCheck2",
    channelScope: "whatsapp-only",
    badgeText: "WhatsApp Only"
  },
  {
    id: "broadcasts",
    category: "Outbound Growth",
    title: "Segmented Broadcast Campaigns",
    headline: "Dispatch targeted template notifications with native scheduling and receipt tracking.",
    description: "Deliver high-relevance updates to segmented audiences. Schedule sends with built-in queue management and view live delivery and read receipts.",
    bullets: [
      "Send bulk approved templates to any tag-based customer segment",
      "Native scheduled delivery: set campaign dispatch date and time without requiring separate cron tasks",
      "Cancel-before-send protection: stop scheduled campaigns before queue execution begins",
      "Comprehensive per-campaign analytics: sent and failed counts at dispatch, plus live delivered and read receipts"
    ],
    iconName: "Send",
    channelScope: "whatsapp-only",
    badgeText: "WhatsApp Only"
  },
  {
    id: "chatbot",
    category: "AI & Automation",
    title: "Multi-Turn Flow Builder & AI Copilot",
    headline: "Build branching conversation flows and grounded AI assistants that know when to hand off.",
    description: "Combine deterministic rule-based triggers with LLM reasoning grounded in your business documents. Resolve routine questions instantly while routing high-intent cases to agents.",
    bullets: [
      "Rule-based flows with exact, contains, regex, and catch-all trigger criteria",
      "Drag-and-drop visual canvas for multi-turn branching customer conversations",
      "Vyxel AI Assistant: ingests documents, FAQs, and URLs with Anthropic or OpenAI grounding",
      "Low-confidence fallback with seamless human handoff and tag-based auto-routing",
      "Interactive appointment booking: presents live slot lists on WhatsApp and prevents double-booking under concurrent replies"
    ],
    iconName: "Bot",
    channelScope: "whatsapp-only",
    badgeText: "WhatsApp Only"
  },
  {
    id: "commerce",
    category: "Commerce & Transactions",
    title: "In-Chat Commerce & Payment Links",
    headline: "Turn WhatsApp conversations into completed transactions with catalog sync and payment buttons.",
    description: "Allow customers to browse products, view details, and complete purchases directly inside WhatsApp using your synced Meta Commerce catalog and integrated Razorpay links.",
    bullets: [
      "WhatsApp Catalog integration synced directly with Meta Commerce Manager for in-chat product sharing",
      "Instant e-commerce triggers: cart & checkout webhooks from Shopify and WooCommerce send immediate notifications",
      "In-chat payments: send Razorpay payment links via interactive WhatsApp button messages",
      "Automated payment status reconciliation: updates thread state instantly upon payment confirmation, cancellation, or expiry"
    ],
    iconName: "ShoppingBag",
    channelScope: "whatsapp-only",
    badgeText: "WhatsApp Only"
  },
  {
    id: "ads",
    category: "Acquisition",
    title: "Click-to-WhatsApp Campaign Creator",
    headline: "Create lead generation campaigns directly from your dashboard — created paused for full review.",
    description: "Bridge the gap between Meta Ads and WhatsApp sales. Build campaign structures directly in Vyxel, verify attribution in every chat thread, and maintain full budget oversight.",
    bullets: [
      "In-product campaign builder: structure campaign, ad set, creative, and ad in one cohesive workflow",
      "Always created paused: campaigns require explicit review and activation in Meta Ads Manager, ensuring Vyxel never auto-spends your budget",
      "First-touch thread attribution: inspect the exact ad source, headline, source URL, and click ID on every incoming conversation",
      "Attribution rollup dashboard to measure which ads generate real customer engagement"
    ],
    iconName: "BarChart3",
    channelScope: "whatsapp-only",
    badgeText: "WhatsApp Only"
  },
  {
    id: "channels",
    category: "Infrastructure",
    title: "Official Channel Connectivity",
    headline: "Connect WhatsApp, Instagram, and Messenger with self-serve ease.",
    description: "Onboard your business numbers and social accounts without bureaucratic hurdles. Choose between fast embedded signup or direct manual identifier entry.",
    bullets: [
      "Embedded Signup via Facebook Login for Business, or manual WABA-ID entry without requiring separate Tech Provider approval",
      "Multi-number support: manage multiple WhatsApp phone numbers per tenant with custom labels and default selection",
      "Unified connection for Instagram DM and Messenger via simple Page ID linking",
      "Real-time connection health monitoring: live quality rating, phone number tier, and webhook status surfaced"
    ],
    iconName: "Radio",
    channelScope: "multi-channel"
  },
  {
    id: "developers",
    category: "Extensibility",
    title: "Developer REST API & Webhooks",
    headline: "A developer-first surface that mirrors our own dashboard architecture.",
    description: "Integrate Vyxel Connect with your proprietary stack, internal CRM, or custom data pipelines using standard REST endpoints and HMAC-authenticated outbound events.",
    bullets: [
      "Clean API-key authentication with scoped `vyx_live_...` tokens",
      "REST API routes mirroring the dashboard's internal operations for messages, contacts, and templates",
      "Outbound HMAC-signed webhooks for real-time events: `message.received`, `message.status`, and `message.sent`",
      "Compatible with Zapier, Make, and n8n via standard HTTP endpoints and webhook triggers"
    ],
    iconName: "Terminal",
    channelScope: "developer",
    badgeText: "REST & Webhooks"
  },
  {
    id: "security",
    category: "Compliance",
    title: "Enterprise Security & Data Isolation",
    headline: "Built from the ground up for strict multi-tenant isolation and granular access controls.",
    description: "Protect your customer conversations and proprietary business data with cryptographic signature verification, strict role hierarchies, and resilient error auditing.",
    bullets: [
      "Granular role hierarchy: Owner > Admin > Agent enforced on every API route and interface action",
      "JWT authentication featuring short-lived access tokens paired with rotating refresh cookies",
      "Per-tenant data isolation guaranteeing zero cross-tenant query leakage",
      "Cryptographic HMAC signature verification for Meta, Razorpay, Shopify, and WooCommerce inbound webhooks",
      "Built-in webhook health panel with failure logs and 1-click event replay"
    ],
    iconName: "ShieldCheck",
    channelScope: "multi-channel"
  }
];
