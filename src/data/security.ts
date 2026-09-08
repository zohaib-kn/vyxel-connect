import { SecurityPillar } from '../types';

export const securityPillars: SecurityPillar[] = [
  {
    title: "Strict Multi-Tenant Isolation",
    subtitle: "Zero cross-tenant data leakage",
    description: "Every query, contact record, message event, and webhook execution is scoped strictly to tenant identity at the architectural level.",
    points: [
      "Tenant-scoped database partitions with boundary assertions",
      "Isolated cryptographic key storage for channel credentials and API tokens",
      "Independent audit logs per business workspace"
    ],
    icon: "Layers"
  },
  {
    title: "Owner > Admin > Agent RBAC",
    subtitle: "Enforced on every route",
    description: "A strict three-tier role hierarchy governs all dashboard actions, configuration changes, billing accesses, and API invocations.",
    points: [
      "Owner: Full tenant ownership, billing settings, and team lifecycle",
      "Admin: Channel configurations, template builder, and campaign management",
      "Agent: Conversation reply permissions, tagging, and assignment visibility"
    ],
    icon: "ShieldAlert"
  },
  {
    title: "JWT & Rotating Refresh Auth",
    subtitle: "Resilient session security",
    description: "Short-lived access tokens prevent unauthorized replay, backed by secure, rotating refresh cookies stored with strict HTTP-only attributes.",
    points: [
      "Short-lived stateless JWT tokens",
      "Rotating refresh cookies with single-use invalidation",
      "Automatic session termination on credential alteration"
    ],
    icon: "Key"
  },
  {
    title: "Cryptographic HMAC Verification",
    subtitle: "Tamper-proof webhooks",
    description: "Every incoming payload from Meta, Razorpay, Shopify, and WooCommerce is cryptographically verified against shared secrets before processing.",
    points: [
      "Meta HMAC-SHA256 signature check on incoming message streams",
      "Razorpay webhook secret validation prior to balance or state updates",
      "Shopify & WooCommerce HMAC verification preventing simulated events"
    ],
    icon: "Lock"
  },
  {
    title: "Auth Endpoint Rate Limiting",
    subtitle: "Brute-force mitigation",
    description: "Intelligent IP-based and credential-based throttling on all authentication surfaces to mitigate automated credential stuffing attacks.",
    points: [
      "Sliding-window request limits on login and password reset routes",
      "Automated IP suspension upon abnormal velocity spikes",
      "Graceful retry-after headers returned to valid clients"
    ],
    icon: "Activity"
  },
  {
    title: "Built-in Webhook Health & Replay",
    subtitle: "No external Sentry required",
    description: "Persisted error logs and an integrated webhook health panel let you monitor stuck or failed deliveries and replay them with one click.",
    points: [
      "In-dashboard webhook error audit log with status codes and payloads",
      "One-click event replay for recovering transient endpoint outages",
      "Self-contained reliability monitoring without mandatory third-party tools"
    ],
    icon: "RefreshCw"
  }
];
