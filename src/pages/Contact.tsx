import React, { useState } from 'react';
import { 
  Mail, MessageSquare, ShieldCheck, CheckCircle2, 
  Send, Building, Phone, ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    estimatedVolume: '1,000 - 10,000',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TALK TO US"
          title="Connect with our solutions &amp; onboarding team."
          description="Have questions about Meta Embedded Signup, high-throughput WhatsApp routing, or custom developer integrations? We're here to help."
          align="center"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Company Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Company &amp; Ecosystem</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Vyxel Connect is an enterprise communication platform developed by Digiwire Technologies Pvt Ltd, engineered to bring official Meta Cloud API capabilities to scaling B2B teams.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">General Support</span>
                    <a href="mailto:support@vyxel.digi-wire.com" className="text-brand-600 hover:underline">
                      support@vyxel.digi-wire.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <MessageSquare className="w-4 h-4 text-[#007FFB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">API &amp; Developer Inquiries</span>
                    <a href="mailto:api@vyxel.digi-wire.com" className="text-[#007FFB] hover:underline">
                      api@vyxel.digi-wire.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Building className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Headquarters</span>
                    <span className="text-slate-500">Digiwire Technologies, Bengaluru, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs text-slate-700 leading-relaxed">
              <div className="flex items-center gap-2 text-[#007FFB] font-bold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Self-Serve Signup Available</span>
              </div>
              You don't need a sales call to get started. You can connect your existing WhatsApp Business Account or create a new one instantly using Facebook Login for Business.
            </div>
          </div>

          {/* Contact / Demo Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-2xl bg-[#01E7DB]/15 text-[#007FFB] flex items-center justify-center mx-auto mb-4 font-bold">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank you for reaching out!</h3>
                  <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto">
                    We've received your details. A member of the Vyxel Connect technical team will contact you within one business day.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request a Tailored Demo</h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Tell us about your team size and monthly conversation volume.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Stores"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Monthly Conversation Volume</label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                    >
                      <option>Under 1,000 conversations</option>
                      <option>1,000 - 10,000 conversations</option>
                      <option>10,000 - 50,000 conversations</option>
                      <option>50,000+ enterprise volume</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">How can we help? (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your channels, current ticketing setup, or custom integration requirements..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      Submit Demo Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
