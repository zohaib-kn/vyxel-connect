import React from 'react';
import { 
  ShoppingBag, Headphones, Megaphone, CalendarCheck, 
  CheckCircle2, ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useCasesList } from '../data/useCases';

export const Solutions: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#007FFB]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#007FFB]" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6 text-purple-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-amber-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#007FFB]" />;
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PURPOSE-BUILT WORKFLOWS"
          title="Solutions tailored to your operational objectives."
          description="Whether driving customer acquisition, expanding repeat orders, or managing support volume, Vyxel Connect provides purpose-built workflows designed around measurable business outcomes."
          align="center"
        />

        <div className="space-y-12">
          {useCasesList.map((uc) => (
            <div
              key={uc.id}
              id={uc.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(uc.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{uc.title}</h3>
                    <span className="text-xs font-semibold text-[#007FFB]">{uc.targetRole}</span>
                  </div>
                </div>

                <Badge variant="blue">{uc.channelSupport}</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{uc.outcome}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {uc.description}
                  </p>

                  <div className="space-y-2.5">
                    {uc.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#007FFB] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                    Implementation Ready
                  </span>
                  <p className="text-xs text-slate-600 mb-6">
                    Connect your Meta channel and activate the {uc.title} workflow template in under 5 minutes.
                  </p>
                  <Button
                    variant="primary"
                    href="https://provider.digi-wire.com/signup"
                    isExternal
                    iconRight={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Start free trial
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
