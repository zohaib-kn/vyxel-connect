import React, { useState } from 'react';
import { 
  Inbox, Users, FileCheck2, Send, Bot, 
  ShoppingBag, BarChart3, Radio, Terminal, ShieldCheck,
  CheckCircle2, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { featureCatalog } from '../data/features';
import { ScreenshotFrame } from '../components/ui/ScreenshotFrame';

export const Features: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Conversations', 'AI & Automation', 'Outbound Growth', 'Commerce & Transactions', 'Acquisition', 'Extensibility', 'Compliance'];

  const filteredFeatures = selectedCategory === 'All'
    ? featureCatalog
    : featureCatalog.filter(f => f.category === selectedCategory);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Inbox': return <Inbox className="w-5 h-5 text-[#007FFB]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#007FFB]" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5 text-purple-600" />;
      case 'Send': return <Send className="w-5 h-5 text-[#007FFB]" />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#007FFB]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-amber-600" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-rose-600" />;
      case 'Radio': return <Radio className="w-5 h-5 text-[#01E7DB]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#007FFB]" />;
      default: return <Inbox className="w-5 h-5 text-[#007FFB]" />;
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FULL CAPABILITIES INVENTORY"
          title="Engineered for high-volume customer conversations."
          description="Every feature built directly into the Vyxel Connect platform — documented to production specification with zero aspirational claims."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Features Detailed List */}
        <div className="space-y-12">
          {filteredFeatures.map((feat, idx) => (
            <div
              key={feat.id}
              id={feat.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0">
                    {getFeatureIcon(feat.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                        §2.{idx + 1} • {feat.category}
                      </span>
                      {feat.badgeText && (
                        <Badge
                          variant={feat.channelScope === 'whatsapp-only' ? 'whatsapp' : feat.channelScope === 'developer' ? 'blue' : 'default'}
                          size="sm"
                        >
                          {feat.badgeText}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-sm font-medium text-brand-600 mt-0.5">{feat.headline}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  href="https://provider.digi-wire.com/signup"
                  isExternal
                  iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Try this feature
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                    Technical Specifications
                  </h4>
                  <ul className="space-y-2.5">
                    {feat.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#007FFB] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6">
                  {feat.id === 'inbox' ? (
                    <ScreenshotFrame
                      title="Unified Inbox Stream"
                      subtitle="SSE Live • 24h Window Active"
                      variant="inbox"
                    />
                  ) : feat.id === 'chatbot' ? (
                    <ScreenshotFrame
                      title="Visual Canvas Builder"
                      subtitle="Branching Decision Logic"
                      variant="chatbot-builder"
                    />
                  ) : feat.id === 'broadcasts' ? (
                    <ScreenshotFrame
                      title="Broadcast Delivery"
                      subtitle="Native Delayed Dispatch"
                      variant="broadcast"
                    />
                  ) : feat.id === 'ads' ? (
                    <ScreenshotFrame
                      title="Ad Campaign Builder"
                      subtitle="Created Paused for Review"
                      variant="ads"
                    />
                  ) : (
                    <div className="p-8 rounded-2xl bg-slate-900 text-slate-300 border border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#01E7DB] mb-3">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Production Ready Implementation</span>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-400">
                        Tested against official Meta Cloud API v20.0 standards and verified in the live provider dashboard.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
