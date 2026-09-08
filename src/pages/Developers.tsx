import React, { useState } from 'react';
import { 
  Terminal, Key, ShieldCheck, Activity, 
  ArrowRight, Check, Copy, Layers, ExternalLink 
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CodeBlock } from '../components/ui/CodeBlock';

export const Developers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'send' | 'contacts' | 'webhook'>('send');

  const sendMessageSnippet = `curl -X POST "https://api.vyxel.digi-wire.com/v1/messages" \\
  -H "Authorization: Bearer vyx_live_a1b2c3d4e5f6" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "whatsapp",
    "to": "+919876543210",
    "type": "template",
    "template": {
      "name": "shipping_confirmation",
      "language": { "code": "en" },
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": "Aarav" },
            { "type": "text", "text": "TRK-9821" }
          ]
        }
      ]
    }
  }'`;

  const contactsSnippet = `curl -X POST "https://api.vyxel.digi-wire.com/v1/contacts" \\
  -H "Authorization: Bearer vyx_live_a1b2c3d4e5f6" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "+919876543210",
    "name": "Sarah Jenkins",
    "tags": ["vip", "delhi-branch"],
    "custom_fields": {
      "order_count": 5,
      "loyalty_tier": "Gold"
    }
  }'`;

  const webhookVerifySnippet = `// Node.js Express HMAC Signature Verification
import crypto from 'crypto';

app.post('/api/webhook', (req, res) => {
  const signature = req.headers['x-vyxel-signature'];
  const secret = process.env.VYXEL_WEBHOOK_SECRET;

  const hmac = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (signature !== hmac) {
    return res.status(401).send('Unauthorized signature');
  }

  const { event, payload } = req.body;
  // Events: 'message.received' | 'message.status' | 'message.sent'
  console.log(\`Received \${event} for message \${payload.id}\`);
  res.status(200).json({ ok: true });
});`;

  const endpoints = [
    { method: "POST", path: "/v1/messages", desc: "Send text, template, product, or interactive payment messages." },
    { method: "GET", path: "/v1/conversations", desc: "Retrieve active conversation threads, unread counters, and channel tags." },
    { method: "POST", path: "/v1/contacts", desc: "Upsert contact attributes, opt-in flags, and tag segments." },
    { method: "GET", path: "/v1/templates", desc: "List approved Meta templates with real-time status and header specifications." },
    { method: "POST", path: "/v1/broadcasts", desc: "Queue template broadcasts to specified customer tag segments." },
    { method: "POST", path: "/v1/webhooks/subscriptions", desc: "Register outbound HMAC-signed webhook URLs." },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#080d19] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DEVELOPER PLATFORM"
          title={<span className="text-white">Built for developers who respect clean REST.</span>}
          description={<span className="text-slate-300">Authenticate with simple Bearer tokens, call REST endpoints that mirror our own UI, and listen to HMAC-signed outbound webhooks.</span>}
          align="center"
          badge={<Badge variant="blue">v1 API Documentation</Badge>}
        />

        {/* Authentication & Security Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-4">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">API Key Auth</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Pass your scoped tenant token in the HTTP Authorization header:
            </p>
            <div className="p-2 rounded bg-slate-950 font-mono text-[11px] text-brand-300 border border-slate-800">
              Authorization: Bearer vyx_live_...
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">HMAC Signature Check</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Outbound webhooks are cryptographically signed using SHA-256 HMAC:
            </p>
            <div className="p-2 rounded bg-slate-950 font-mono text-[11px] text-emerald-300 border border-slate-800">
              Header: x-vyxel-signature
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Predictable Rate Limits</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Fair-use sliding window limits protect backend stability:
            </p>
            <div className="p-2 rounded bg-slate-950 font-mono text-[11px] text-purple-300 border border-slate-800">
              60 req / sec (Burst 120 req / sec)
            </div>
          </div>
        </div>

        {/* Interactive Code Playground */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('send')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                  activeTab === 'send' ? 'bg-brand-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                POST /v1/messages
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('contacts')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                  activeTab === 'contacts' ? 'bg-brand-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                POST /v1/contacts
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('webhook')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                  activeTab === 'webhook' ? 'bg-brand-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Verify Webhook (Node.js)
              </button>
            </div>

            <span className="text-xs text-slate-400 font-mono">Base URL: https://api.vyxel.digi-wire.com</span>
          </div>

          <CodeBlock
            code={
              activeTab === 'send'
                ? sendMessageSnippet
                : activeTab === 'contacts'
                ? contactsSnippet
                : webhookVerifySnippet
            }
            language={activeTab === 'webhook' ? 'javascript' : 'bash'}
            filename={
              activeTab === 'send'
                ? 'send-template.sh'
                : activeTab === 'contacts'
                ? 'upsert-contact.sh'
                : 'verify-hmac.js'
            }
          />
        </div>

        {/* Core Endpoints Table */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8">
          <h3 className="text-xl font-bold text-white mb-6">Core API Endpoints</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="pb-3 px-3 font-semibold">Method</th>
                  <th className="pb-3 px-3 font-semibold">Endpoint Path</th>
                  <th className="pb-3 px-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {endpoints.map((ep, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition">
                    <td className="py-3.5 px-3 font-bold text-emerald-400">{ep.method}</td>
                    <td className="py-3.5 px-3 text-slate-200">{ep.path}</td>
                    <td className="py-3.5 px-3 text-slate-400 font-sans">{ep.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
