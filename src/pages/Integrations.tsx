import React from 'react';
import { 
  ShoppingBag, CreditCard, Workflow, Database, 
  Boxes, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { integrationsList } from '../data/integrations';
import { Button } from '../components/ui/Button';
import { CodeBlock } from '../components/ui/CodeBlock';

export const Integrations: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'shopify': return <ShoppingBag className="w-6 h-6 text-[#007FFB]" />;
      case 'woocommerce': return <Boxes className="w-6 h-6 text-purple-600" />;
      case 'razorpay': return <CreditCard className="w-6 h-6 text-[#007FFB]" />;
      case 'automation-tools': return <Workflow className="w-6 h-6 text-amber-600" />;
      case 'custom-crm': return <Database className="w-6 h-6 text-indigo-600" />;
      default: return <Workflow className="w-6 h-6 text-slate-600" />;
    }
  };

  const sampleWebhookPayload = `{
  "event": "order.fulfilled",
  "store_id": "shopify_store_842",
  "customer": {
    "phone": "+919876543210",
    "first_name": "Priya"
  },
  "order": {
    "id": "ORD-94182",
    "total": "₹1,499.00",
    "tracking_url": "https://track.shipping.com/v1/9841"
  }
}`;

  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ECOSYSTEM INTEGRATIONS"
          title="Connect your commerce, payment, and internal databases."
          description="Direct integrations via verified webhooks and standard REST endpoints. No marketplace middlemen or complex middleware required."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrationsList.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                    Supported Capabilities
                  </span>
                  {item.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] text-slate-500 font-mono">
                  <span>Connection: </span>
                  <span className="font-bold text-slate-800">{item.connectionType}</span>
                </div>
                {item.note && (
                  <p className="text-[10px] text-slate-400 italic mt-2">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Webhook Integration Guide */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="eyebrow text-brand-400 font-mono">AUTOMATED INBOUND HOOKS</span>
              <h3 className="text-xl font-bold text-white mt-1">
                E-Commerce Trigger Payload Structure
              </h3>
            </div>
            <span className="text-xs font-mono text-[#01E7DB] bg-[#01E7DB]/10 px-3 py-1 rounded border border-[#01E7DB]/30">
              Immediate Dispatch
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            Configure your Shopify or custom store webhook URL to target <code className="text-brand-300 font-mono">https://api.vyxel.digi-wire.com/v1/webhooks/orders</code>. Inbound events trigger official WhatsApp template notifications immediately.
          </p>

          <CodeBlock
            code={sampleWebhookPayload}
            language="json"
            filename="inbound-order-trigger.json"
          />

          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Need custom CRM synchronization? Reach out via our developer API routes.
            </span>
            <Button
              variant="whatsapp"
              size="sm"
              href="/developers"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Developer API Reference
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
