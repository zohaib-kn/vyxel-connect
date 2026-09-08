import React, { useState } from 'react';
import { Terminal, Key, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CodeBlock } from '../ui/CodeBlock';

export const DeveloperPlatform: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState<'curl' | 'node'>('curl');

  const curlExample = `curl -X POST "https://api.vyxel.digi-wire.com/v1/messages" \\
  -H "Authorization: Bearer vyx_live_8f3a9e2d1c7b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "whatsapp",
    "to": "+919876543210",
    "type": "template",
    "template": {
      "name": "order_update_v2",
      "language": { "code": "en" },
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": "Sarah" },
            { "type": "text", "text": "#4092" }
          ]
        }
      ]
    }
  }'`;

  const nodeExample = `// Node.js Express HMAC Webhook Verification
import crypto from 'crypto';

app.post('/webhooks/vyxel', (req, res) => {
  const signature = req.headers['x-vyxel-signature'];
  const secret = process.env.VYXEL_WEBHOOK_SECRET;

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid HMAC signature');
  }

  const { event, data } = req.body;
  // Events: message.received, message.status, message.sent
  console.log(\`Processed event: \${event}\`, data.id);
  res.status(200).json({ received: true });
});`;

  return (
    <section id="developers" className="py-20 sm:py-28 bg-[#090e1a] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DEVELOPER SURFACE"
          title={<span className="text-white">API-first architecture mirroring our own UI.</span>}
          description={<span className="text-slate-300">Integrate customer messaging into your backend with scoped API keys (`vyx_live_...`), REST endpoints identical to the dashboard, and outbound HMAC-signed webhooks.</span>}
          align="center"
          badge={<Badge variant="blue">REST &amp; Outbound Webhooks</Badge>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Tech capabilities */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <Key className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Scoped API Keys</h4>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Simple Bearer authorization using <code className="text-brand-300 font-mono">vyx_live_...</code> keys. Granular permissions ensure each integration accesses only authorized endpoints.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">HMAC-Signed Outbound Webhooks</h4>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Subscribe to real-time events: <code className="text-slate-300 font-mono text-[11px]">message.received</code>, <code className="text-slate-300 font-mono text-[11px]">message.status</code>, and <code className="text-slate-300 font-mono text-[11px]">message.sent</code>. Verified via SHA256 HMAC header.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Automation Compatibility</h4>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Easily consumed by Zapier, Make, and n8n via standard generic HTTP request modules and inbound webhook listeners — no proprietary connector lock-in.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                href="/developers"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Read the API docs
              </Button>
            </div>
          </div>

          {/* Interactive Code Window */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <button
                type="button"
                onClick={() => setActiveSnippet('curl')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeSnippet === 'curl'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                cURL (Send Template)
              </button>
              <button
                type="button"
                onClick={() => setActiveSnippet('node')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeSnippet === 'node'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Node.js (Verify Webhook)
              </button>
            </div>

            <CodeBlock
              code={activeSnippet === 'curl' ? curlExample : nodeExample}
              language={activeSnippet === 'curl' ? 'bash' : 'javascript'}
              filename={activeSnippet === 'curl' ? 'send-message.sh' : 'verify-webhook.js'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
