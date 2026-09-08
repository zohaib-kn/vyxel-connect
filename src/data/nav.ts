export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Integrations", href: "/integrations" },
  { label: "Developers", href: "/developers" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
];

export const footerLinks = {
  product: [
    { label: "Unified Inbox", href: "/features#inbox" },
    { label: "AI Flow Builder", href: "/features#chatbot" },
    { label: "Broadcast Campaigns", href: "/features#broadcasts" },
    { label: "WhatsApp Catalog", href: "/features#commerce" },
    { label: "Click-to-WhatsApp Ads", href: "/features#ads" },
    { label: "Channel Connectivity", href: "/features#channels" },
  ],
  solutions: [
    { label: "E-commerce & Retail", href: "/solutions#ecommerce" },
    { label: "Support Teams", href: "/solutions#support" },
    { label: "Growth & Marketing", href: "/solutions#marketing" },
    { label: "Appointment Bookings", href: "/solutions#bookings" },
  ],
  developers: [
    { label: "API Reference", href: "/developers" },
    { label: "Outbound Webhooks", href: "/developers#webhooks" },
    { label: "HMAC Signature Check", href: "/developers#security" },
    { label: "Rate Limits", href: "/developers#limits" },
    { label: "Integrations Directory", href: "/integrations" },
  ],
  trust: [
    { label: "Security Architecture", href: "/security" },
    { label: "Role-Based Access (RBAC)", href: "/security#rbac" },
    { label: "Meta Business Compliance", href: "/security#meta" },
    { label: "Pricing Transparency", href: "/pricing" },
    { label: "Contact & Demo", href: "/contact" },
  ]
};
