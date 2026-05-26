import { useState } from 'react';
import { Server, Cloud, Briefcase, Settings, Hospital, MoreHorizontal, Check, ArrowRight, Sparkles, Network, Bot } from 'lucide-react';

const industries = [
  { id: 'it', icon: Server, name: 'IT Services', desc: 'Managed infrastructure, consulting, and support teams.' },
  { id: 'saas', icon: Cloud, name: 'SaaS', desc: 'Subscription models, product-led growth, and churn metrics.' },
  { id: 'prof', icon: Briefcase, name: 'Prof Services', desc: 'Accounting, legal, and specialized agency billing flows.' },
  { id: 'managed', icon: Settings, name: 'Managed Services', desc: 'Continuous delivery and operational maintenance workflows.' },
  { id: 'health', icon: Hospital, name: 'Healthcare IT', desc: 'HIPAA compliant pipelines and patient-data management.' },
  { id: 'other', icon: MoreHorizontal, name: 'Other', desc: 'Create a custom industry profile with your own labels.' },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState('it');

  return (
    <section className="bg-grad-hero pb-20">
      <div className="container-x py-16 lg:py-20 text-center">
        <p className="text-purple-600 text-xs font-bold tracking-[0.18em] uppercase">
          Personalised from Day One
        </p>
        <h1 className="mt-3 font-display text-4xl lg:text-5xl font-extrabold text-ink-900 leading-tight">
          A CRM that configures itself <br /> to your business.
        </h1>
        <p className="mt-5 text-ink-500 max-w-2xl mx-auto">
          Experience a platform that understands your industry-specific workflows, terminology, and KPIs automatically upon setup.
        </p>

        {/* Stepper */}
        <div className="mt-12 flex items-center justify-center gap-2 sm:gap-6 max-w-3xl mx-auto">
          <Step n={1} label="Industry" complete />
          <span className="flex-1 h-px bg-ink-200 max-w-12" />
          <Step n={2} label="Use Case" active />
          <span className="flex-1 h-px bg-ink-200 max-w-12" />
          <Step n={3} label="Preferences" />
          <span className="flex-1 h-px bg-ink-200 max-w-12" />
          <Step n={4} label="Workspace Ready" icon />
        </div>

        {/* Card */}
        <div className="mt-10 card max-w-4xl mx-auto p-6 lg:p-10 text-left">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink-50 border border-ink-100 text-xs text-ink-500 w-fit mx-auto">
            🔒 setup.nexus-crm.ai/onboarding/industry
          </div>

          <h3 className="font-display text-2xl font-bold text-ink-900 text-center mt-7">
            What industry are you in?
          </h3>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((i) => {
              const active = selected === i.id;
              return (
                <button
                  key={i.id}
                  onClick={() => setSelected(i.id)}
                  className={`text-left p-4 rounded-xl border-2 transition-all ${
                    active
                      ? 'border-brand-500 bg-brand-50/40 shadow-soft'
                      : 'border-ink-100 hover:border-ink-200 hover:bg-ink-50/30'
                  }`}
                >
                  <div className="h-10 w-10 rounded-lg bg-ink-50 grid place-items-center text-ink-700">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink-900">{i.name}</p>
                  <p className="mt-1 text-xs text-ink-500 leading-relaxed">{i.desc}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex justify-end">
            <button className="btn-primary">
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <Tile icon={Sparkles} title="Instant Taxonomy" desc='Nexus renames every object to match your mental model. Leads become "Prospects" or "Patients" instantly.' />
          <Tile icon={Network} title="Logic Migration" desc="Built-in templates for revenue operations based on your industry's most successful startups." />
          <Tile icon={Bot} title="Agentic Flows" desc="AI agents pre-configured to your specific service level agreements and customer journeys." />
        </div>
      </div>
    </section>
  );
}

function Step({ n, label, active, complete, icon }: { n: number; label: string; active?: boolean; complete?: boolean; icon?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`h-9 w-9 rounded-full grid place-items-center text-xs font-bold ${
          complete
            ? 'bg-mint-500 text-white'
            : active
            ? 'bg-brand-600 text-white'
            : 'bg-ink-100 text-ink-500'
        }`}
      >
        {complete ? <Check className="h-4 w-4" /> : icon ? '🚀' : `0${n}`}
      </div>
      <span
        className={`text-[11px] font-semibold ${
          complete ? 'text-mint-600' : active ? 'text-brand-600' : 'text-ink-500'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Tile({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="card p-5">
      <div className="h-9 w-9 rounded-xl bg-purple-50 text-purple-600 grid place-items-center">
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-3 font-semibold text-ink-900">{title}</p>
      <p className="mt-1.5 text-xs text-ink-500 leading-relaxed">{desc}</p>
    </div>
  );
}
