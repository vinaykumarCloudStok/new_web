import { useState } from 'react';
import {
  Server,
  Cloud,
  Handshake,
  Settings2,
  Briefcase,
  MoreHorizontal,
  Check,
  Sparkles,
  Network,
  Bot,
  ArrowRight,
  Lock,
} from 'lucide-react';

const industries = [
  { id: 'it-services', icon: Server, title: 'IT Services', desc: 'Managed infrastructure, consulting, and support teams.' },
  { id: 'saas', icon: Cloud, title: 'SaaS', desc: 'Subscription models, product-led growth, and churn metrics.' },
  { id: 'prof-services', icon: Handshake, title: 'Prof Services', desc: 'Accounting, legal, and specialized agency billing flows.' },
  { id: 'managed-services', icon: Settings2, title: 'Managed Services', desc: 'Continuous delivery and operational maintenance workflows.' },
  { id: 'healthcare-it', icon: Briefcase, title: 'Healthcare IT', desc: 'HIPAA compliant pipelines and patient-data management.' },
  { id: 'other', icon: MoreHorizontal, title: 'Other', desc: 'Create a custom industry profile with your own labels.' },
];

const steps = [
  { num: '01', label: 'Industry', state: 'done' },
  { num: '02', label: 'Use Case', state: 'active' },
  { num: '03', label: 'Preferences', state: 'pending' },
  { num: '04', label: 'Workspace Ready', state: 'pending' },
];

const explainers = [
  {
    icon: Sparkles,
    title: 'Instant Taxonomy',
    desc: 'Ascoyo renames every object to match your mental model. Leads become "Prospects" or "Patients" instantly.',
    tone: 'bg-purple-50 text-purple-700',
  },
  {
    icon: Network,
    title: 'Logic Migration',
    desc: "Built-in templates for revenue operations based on your industry's most successful startups.",
    tone: 'bg-brand-50 text-brand-700',
  },
  {
    icon: Bot,
    title: 'Agentic Flows',
    desc: 'AI agents pre-configured to your specific service level agreements and customer journeys.',
    tone: 'bg-amber-50 text-amber-700',
  },
];

export default function InsightsPage() {
  const [selected, setSelected] = useState('it-services');

  return (
    <section className="py-14 lg:py-20">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-purple-600">Personalised from day one</p>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.1]">
            A CRM that configures itself <br className="hidden lg:block" /> to your business.
          </h1>
          <p className="mt-5 text-ink-500">
            Experience a platform that understands your industry-specific workflows, terminology, and KPIs automatically upon setup.
          </p>
        </div>

        {/* Stepper */}
        <div className="mt-12 flex items-center justify-center gap-4 lg:gap-12">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-4 lg:gap-12">
              <div className="flex flex-col items-center">
                <div
                  className={`h-11 w-11 rounded-full grid place-items-center text-sm font-bold ${
                    s.state === 'done'
                      ? 'bg-mint-500 text-white'
                      : s.state === 'active'
                      ? 'bg-brand-600 text-white'
                      : 'bg-ink-100 text-ink-400'
                  }`}
                >
                  {s.state === 'done' ? <Check className="h-5 w-5" /> : s.num}
                </div>
                <span
                  className={`mt-2 text-xs font-semibold ${
                    s.state === 'done'
                      ? 'text-mint-600'
                      : s.state === 'active'
                      ? 'text-brand-600'
                      : 'text-ink-400'
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-px w-8 lg:w-16 ${s.state === 'done' ? 'bg-mint-500' : 'bg-ink-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Industry selector card */}
        <div className="mt-12 max-w-4xl mx-auto card overflow-hidden shadow-soft">
          {/* Browser chrome */}
          <div className="border-b border-ink-100 px-4 py-3 flex items-center gap-2 bg-lilac-50/50">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-ink-100 text-xs text-ink-500">
                <Lock className="h-3 w-3" />
                setup.ascoyo.ai/onboarding/industry
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-10">
            <h2 className="text-center font-display text-2xl font-bold text-ink-900">
              What industry are you in?
            </h2>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((ind) => {
                const isSelected = selected === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelected(ind.id)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50/40 shadow-card'
                        : 'border-ink-100 bg-white hover:border-ink-200'
                    }`}
                  >
                    <div
                      className={`h-10 w-10 rounded-lg grid place-items-center ${
                        isSelected ? 'bg-brand-100 text-brand-700' : 'bg-lilac-50 text-ink-500'
                      }`}
                    >
                      <ind.icon className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-sm font-bold text-ink-900">{ind.title}</p>
                    <p className="mt-1 text-xs text-ink-500 leading-snug">{ind.desc}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink-950 text-white text-sm font-semibold hover:bg-ink-900 transition-colors">
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Explainer tiles */}
        <div className="mt-12 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {explainers.map((e) => (
            <div key={e.title} className="card p-6">
              <div className={`h-10 w-10 rounded-lg grid place-items-center ${e.tone}`}>
                <e.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-ink-900">{e.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
