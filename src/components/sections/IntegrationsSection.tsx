import React from 'react';
import { 
  ShoppingBag, CreditCard, Workflow, Database, 
  Boxes, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { integrationsList } from '../../data/integrations';
import { Button } from '../ui/Button';

export const IntegrationsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'shopify': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'woocommerce': return <Boxes className="w-5 h-5 text-purple-600" />;
      case 'razorpay': return <CreditCard className="w-5 h-5 text-blue-600" />;
      case 'automation-tools': return <Workflow className="w-5 h-5 text-amber-600" />;
      case 'custom-crm': return <Database className="w-5 h-5 text-indigo-600" />;
      default: return <Workflow className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="integrations" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CONNECTED ECOSYSTEM"
          title="Connect your commerce, payment, and internal CRM stack."
          description="Seamlessly bridge your existing e-commerce catalogs, transactional payment gateways, and custom backend databases using native webhooks and open APIs."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationsList.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-center font-bold">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1">{item.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-700">
                  {item.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Method:</span>
                  <span className="font-semibold text-slate-700">{item.connectionType}</span>
                </div>
                {item.note && (
                  <p className="mt-2 text-[10px] text-slate-400 italic">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            href="/integrations"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Explore all integrations &amp; guides
          </Button>
        </div>
      </div>
    </section>
  );
};
