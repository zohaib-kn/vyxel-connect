import React from 'react';
import { ShoppingBag, Headphones, Megaphone, CalendarCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useCasesList } from '../../data/useCases';
import { Button } from '../ui/Button';

export const UseCasesSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-blue-600" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-purple-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-amber-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SOLUTIONS BY USE CASE"
          title="Tailored workflows for your revenue and support operations."
          description="Whether you run high-volume marketing campaigns, manage customer support tickets, or sell catalog goods, Vyxel Connect provides purpose-built workflows."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {useCasesList.map((uc) => (
            <div
              key={uc.id}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(uc.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {uc.channelSupport}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{uc.title}</h3>
                <p className="text-xs font-semibold text-brand-600 mb-3">{uc.outcome}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {uc.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {uc.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  href={`/solutions#${uc.id}`}
                  className="w-full sm:w-auto"
                  iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Explore {uc.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
