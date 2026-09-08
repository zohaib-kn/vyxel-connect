import React, { useState } from 'react';
import { Terminal, Key, ShieldCheck, ArrowRight, Check, ArrowUpRight, Cpu } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';
import { LaptopFrame } from '../ui/LaptopFrame';

export const DeveloperPlatform: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState<'curl' | 'node' | 'python' | 'dashboard'>('dashboard');

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
  // Events: message.received, message.status, payment.captured
  console.log(\`Received event: \${event}\`, data.id);
  res.status(200).json({ received: true });
});`;

  const pythonExample = `# Python Requests client
import requests

url = "https://api.vyxel.digi-wire.com/v1/messages"
headers = {
    "Authorization": "Bearer vyx_live_8f3a9e2d1c7b",
    "Content-Type": "application/json"
}
payload = {
    "channel": "whatsapp",
    "to": "+919876543210",
    "type": "text",
    "text": { "body": "Your order #4092 has been dispatched!" }
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`;

  return (
    <section id="developers" className="py-20 sm:py-28 bg-[#090e1a] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB] animate-pulse"></span>
              <span className="text-xs font-bold text-[#01E7DB] tracking-wide font-mono">
                DEVELOPER SURFACE · REST &amp; WEBHOOKS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-white leading-[1.05]">
              API-first architecture <span className="bg-gradient-to-r from-[#007FFB] to-[#01E7DB] bg-clip-text text-transparent">mirroring our own UI.</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-slate-300 leading-relaxed">
              Every action you perform in the dashboard is available via REST endpoints. Scoped API keys, HMAC-signed webhooks, and identical JSON schemas ensure painless backend integration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Tech capabilities (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#007FFB]/10 border border-[#007FFB]/20 text-[#007FFB] flex items-center justify-center shrink-0">
                  <Key className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Scoped API Keys</h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Simple Bearer authorization using <code className="text-[#01E7DB] font-mono">vyx_live_...</code> keys. Granular permissions ensure backend microservices access only designated resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#01E7DB]/10 border border-[#01E7DB]/20 text-[#01E7DB] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">HMAC-Signed Outbound Webhooks</h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Subscribe to real-time events: <code className="text-slate-300 font-mono text-[11px]">message.received</code>, <code className="text-slate-300 font-mono text-[11px]">message.status</code>, and <code className="text-slate-300 font-mono text-[11px]">payment.captured</code>. Verified via SHA256 signature header.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">No Proprietary Connector Lock-in</h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Easily consumed by Zapier, Make, and n8n via standard generic HTTP request modules and inbound webhook listeners.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-4">
              <a
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(0,127,251,0.25)] hover:bg-[#006bd1] transition-all"
              >
                <span>Read the API documentation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-slate-400">
                OpenAPI 3.1 Spec
              </span>
            </div>
          </div>

          {/* Interactive Code Window (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <button
                type="button"
                onClick={() => setActiveSnippet('dashboard')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeSnippet === 'dashboard'
                    ? 'bg-gradient-to-r from-[#007FFB] to-[#01E7DB] text-slate-900 shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Live Dashboard
              </button>
              <button
                type="button"
                onClick={() => setActiveSnippet('curl')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeSnippet === 'curl'
                    ? 'bg-[#007FFB] text-white shadow-sm'
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
                    ? 'bg-[#007FFB] text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Node.js (Verify Webhook)
              </button>
              <button
                type="button"
                onClick={() => setActiveSnippet('python')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeSnippet === 'python'
                    ? 'bg-[#007FFB] text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Python (SDK)
              </button>
            </div>

            {activeSnippet === 'dashboard' ? (
              <LaptopFrame
                framedImageSrc="/screenshots/developer-framed.png"
                blobColor="cyan"
                blobPosition="top-right"
                className="w-full"
              />
            ) : (
              <LaptopFrame
                blobColor="cyan"
                blobPosition="top-right"
                className="w-full"
              >
                <div className="w-full h-full overflow-auto bg-[#0b1120] text-xs">
                  <CodeBlock
                    code={
                      activeSnippet === 'curl'
                        ? curlExample
                        : activeSnippet === 'node'
                        ? nodeExample
                        : pythonExample
                    }
                    language={
                      activeSnippet === 'curl'
                        ? 'bash'
                        : activeSnippet === 'node'
                        ? 'javascript'
                        : 'python'
                    }
                    filename={
                      activeSnippet === 'curl'
                        ? 'send-message.sh'
                        : activeSnippet === 'node'
                        ? 'verify-webhook.js'
                        : 'send_whatsapp.py'
                    }
                    className="h-full rounded-none border-none shadow-none text-xs"
                  />
                </div>
              </LaptopFrame>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
