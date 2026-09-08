import { IntegrationItem } from '../types';

export const integrationsList: IntegrationItem[] = [
  {
    id: "shopify",
    name: "Shopify",
    category: "E-commerce",
    description: "Connect your Shopify store via native webhooks to trigger immediate order updates and checkout recovery messages.",
    capabilities: [
      "Real-time checkout webhook triggers immediate notifications",
      "Order creation and status update messaging",
      "Automated WhatsApp tracking number delivery"
    ],
    connectionType: "Inbound Webhook Verification",
    icon: "ShoppingBag",
    note: "Notifications dispatch immediately upon checkout trigger events."
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "E-commerce",
    description: "Sync your WordPress & WooCommerce orders directly to customer WhatsApp threads for seamless transactional updates.",
    capabilities: [
      "Order status transition notifications",
      "Instant billing and order receipt summaries",
      "Customer opt-in sync to Vyxel contacts"
    ],
    connectionType: "REST Webhook Secret",
    icon: "Boxes"
  },
  {
    id: "razorpay",
    name: "Razorpay",
    category: "Payments",
    description: "Generate and dispatch secure payment links inside WhatsApp chat threads with automatic status reconciliation.",
    capabilities: [
      "1-click in-chat Razorpay payment link generation",
      "Automatic real-time status updates: Paid, Cancelled, Expired",
      "Thread confirmation bubbles and automated receipt messages"
    ],
    connectionType: "Platform Gateway Integration",
    icon: "CreditCard",
    note: "Payments run securely through the platform gateway account."
  },
  {
    id: "automation-tools",
    name: "Zapier / Make / n8n",
    category: "Automation & Webhooks",
    description: "Connect thousands of external tools using Vyxel Connect's generic REST endpoints and HMAC-signed outbound webhooks.",
    capabilities: [
      "Trigger external workflows on message.received and message.status",
      "Dispatch WhatsApp templates from external CRMs via standard HTTP POST",
      "No proprietary connector needed — standard JSON payloads"
    ],
    connectionType: "Generic REST & Webhooks",
    icon: "Workflow",
    note: "Integrates via open REST API & outbound webhooks (generic HTTP access, not a published marketplace listing)."
  },
  {
    id: "custom-crm",
    name: "Custom CRM & Internal Databases",
    category: "CRM & API",
    description: "Full bidirectional sync with your proprietary backend, database, or internal ERP using simple API keys.",
    capabilities: [
      "Synchronize contact fields and tags in real time",
      "Programmatically trigger template campaigns",
      "Stream incoming messages to your data warehouse"
    ],
    connectionType: "Bearer API Key (`vyx_live_...`)",
    icon: "Database"
  }
];
