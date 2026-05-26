import { Link } from 'react-router-dom';
import { Zap, Calendar, GitBranch, Bolt, BarChart3, Settings, Clock, ArrowRight } from 'lucide-react';

const steps = [
  {
    tag: 'TRIGGER',
    tagColor: 'bg-mint-500/10 text-mint-600',
    title: 'Rep finishes product demo on Zoom',
    desc: 'Intelligence gathering initiated automatically upon call disconnection.',
    time: 'T+0:00',
  },
  {
    tag: 'MEETING INTELLIGENCE',
    tagColor: 'bg-brand-50 text-brand-700',
    title: '6 data points extracted',
    desc: 'BANT fields identified: Budget confirmed, Authority verified, Timeline within 3 months.',
    time: 'T+0:00',
  },
  {
    tag: 'FOLLOW UP AGENT',
    tagColor: 'bg-amber-50 text-amber-700',
    title: '2 commitments become tasks',
    desc: "Drafted follow-up email and added 'Send security whitepaper' to CRM task list.",
    time: 'T+0:00',
  },
  {
    tag: 'LEAD SCORING',
    tagColor: 'bg-purple-50 text-purple-700',
    title: 'Score jumps 64 → 78',
    desc: 'Intent signals recalculated based on technical depth of demo questions.',
    time: 'T+0:00',
  },
  {
    tag: 'DEAL COACH',
    tagColor: 'bg-orange-50 text-orange-700',
    title: 'Objection flagged',
    desc: 'Compliance concern detected. Next brief updated with specialized rebuttal assets.',
    time: 'T+0:00',
  },
  {
    tag: 'OUTCOME',
    tagColor: 'bg-mint-500/10 text-mint-600',
    title: 'Rep reviews for 45s',
    desc: 'Accepting all agent suggestions with a single click. Pipeline perfectly synced.',
    time: 'T+0:00',
  },
];

export default function ChainEffectPage() {
  return (
    <section className="bg-grad-hero">
      <div className="container-x py-16 lg:py-20">
        <div className="text-center">
          <p className="text-mint-600 text-xs font-bold tracking-[0.18em] uppercase">
            The Chain Effect
          </p>
          <h1 className="mt-3 font-display text-3xl lg:text-5xl font-extrabold text-ink-900 leading-tight">
            One meeting. Five agents. Zero manual entry.
          </h1>
          <p className="mt-5 text-ink-500 max-w-3xl mx-auto">
            When a meeting ends, Ascoyo's Meeting Intelligence Agent triggers a cascade across your entire system. Here's what happens in under 5 minutes.
          </p>
        </div>

        {/* Flow board */}
        <div className="mt-12 flex gap-6 max-w-5xl mx-auto">
          {/* Side rail */}
          <div className="hidden md:flex flex-col gap-2 sticky top-24 self-start">
            {[Bolt, Calendar, GitBranch, Zap, BarChart3, Settings].map((I, i) => (
              <span
                key={i}
                className={`h-11 w-11 rounded-xl grid place-items-center border ${
                  i === 0 ? 'bg-brand-50 border-brand-100 text-brand-600' : 'border-ink-100 text-ink-500 bg-white'
                }`}
              >
                <I className="h-4 w-4" />
              </span>
            ))}
          </div>

          <div className="flex-1 bg-lilac-50/60 rounded-2xl border border-ink-100 p-6 lg:p-8">
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-ink-500">
              Workflow in action
            </p>
            <div className="mt-5 space-y-3">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-ink-100 shadow-card animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start gap-4 justify-between">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wider ${s.tagColor}`}
                      >
                        {s.tag}
                      </span>
                      <p className="mt-2.5 text-base font-semibold text-ink-900">{s.title}</p>
                      <p className="mt-1 text-xs text-ink-500 leading-relaxed">{s.desc}</p>
                    </div>
                    <span className="text-[10px] font-mono inline-flex items-center gap-1 text-ink-500 shrink-0">
                      <Clock className="h-3 w-3" /> {s.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto card p-5 text-center text-sm text-ink-700">
          Total system updates: <b>4 agents recalculated</b> · 2 tasks created · 1 objection tracked · 1 BANT field updated ·{' '}
          <span className="text-brand-700 font-semibold">0 forms filled by the rep</span>
        </div>
      </div>

      <div className="bg-lilac-50 mt-12 py-16">
        <div className="container-x text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-ink-100 text-xs font-semibold text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Active Automation Engine
          </span>
          <h2 className="mt-5 font-display text-3xl lg:text-4xl font-bold text-ink-900">
            Ready to activate your intelligent workspace?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/pricing" className="btn-primary">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Book a Technical Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
