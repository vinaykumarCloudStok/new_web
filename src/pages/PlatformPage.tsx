import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const modules = [
  {
    num: '01',
    tag: 'Account Management',
    title: 'Every company. Full context. Zero tab-switching.',
    desc:
      'Create an account with just a name and URL — the AI agent auto-fills industry, size, revenue, and tech stack. View the complete timeline, contacts, signals, and pipeline in one screen.',
    to: '/platform/account-management',
    img: 'account',
  },
  {
    num: '02',
    tag: 'Contact Management',
    title: 'Map the entire buying committee.',
    desc:
      'Track every decision-maker with role badges (Champion, Blocker, Influencer). Communication styles inferred by AI. One-click activity logging in under 30 seconds.',
    to: '/platform/contact-management',
    img: 'contact',
  },
  {
    num: '03',
    tag: 'Lead & Opportunity',
    title: 'Pipeline from first touch to closed-won.',
    desc:
      'Visual Kanban board with drag-and-drop. Weighted revenue forecasts. One-click lead-to-opportunity conversion. Win/loss intelligence that feeds back into every agent.',
    to: '/platform/lead-opportunity',
    img: 'lead',
  },
  {
    num: '04',
    tag: 'Activity & Task',
    title: 'The data layer that makes every agent smarter.',
    desc:
      'Auto-captured meetings. Smart task sorting by deal impact, not just due date. Activity completeness tracking. The connective tissue of the entire CRM.',
    to: '/platform/activity-task',
    img: 'activity',
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="bg-grad-hero">
        <div className="container-x py-16 lg:py-20 text-center">
          <p className="eyebrow">Platform</p>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-tight">
            Everything a sales team needs. <br />
            Nothing it doesn't.
          </h1>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-x grid lg:grid-cols-2 gap-x-14 gap-y-16">
          {modules.map((m) => (
            <Link
              key={m.num}
              to={m.to}
              className="group block animate-fade-up"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-xs font-mono font-bold">
                  [{m.num}]
                </span>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-ink-500">
                  {m.tag}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl lg:text-[28px] font-bold text-ink-900 leading-tight group-hover:text-brand-700 transition-colors">
                {m.title}
              </h2>
              <p className="mt-3 text-sm text-ink-500 max-w-lg leading-relaxed">{m.desc}</p>

              <div className="mt-6 rounded-2xl overflow-hidden border border-ink-100 bg-lilac-50 aspect-[16/10] grid place-items-center group-hover:shadow-soft transition-shadow">
                <ModulePreview kind={m.img} />
              </div>

              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                Explore module <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </p>
            </Link>
          ))}
        </div>

        <div className="container-x mt-16 text-center">
          <p className="text-sm text-ink-500">
            55 screens across 4 modules + 1 compliance layer. 46 user stories with acceptance criteria.
          </p>
          <p className="mt-1 text-sm font-semibold text-brand-700">
            Purpose-built for IT &amp; Professional Services.
          </p>
        </div>
      </section>
    </>
  );
}

function ModulePreview({ kind }: { kind: string }) {
  if (kind === 'account') {
    return (
      <div className="w-[88%] h-[80%] rounded-xl bg-ink-900 shadow-soft p-4">
        <div className="flex gap-1.5 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-2">
          {[80, 60, 70, 90, 50, 75].map((w, i) => (
            <div
              key={i}
              style={{ width: `${w}%` }}
              className="h-2 rounded bg-ink-700"
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-5 gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-5 rounded bg-teal-600/70" />
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'contact') {
    return (
      <div className="w-[80%] h-[88%] rounded-xl bg-ink-900 shadow-soft p-3">
        <div className="bg-ink-800 rounded-md p-2.5 space-y-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className="h-2 w-16 rounded bg-ink-600" />
              <div className="h-2 flex-1 rounded bg-ink-700" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'lead') {
    return (
      <div className="w-[88%] h-[80%] bg-white rounded-xl shadow-soft p-3 grid grid-cols-2 gap-2">
        {Array.from({ length: 2 }).map((_, col) => (
          <div key={col} className="bg-ink-50 rounded p-2 space-y-1.5">
            <div className="h-3 w-1/2 bg-ink-900 rounded" />
            {Array.from({ length: 4 }).map((__, r) => (
              <div key={r} className="h-3 rounded bg-white border border-ink-200" />
            ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="w-[88%] h-[80%] rounded-xl bg-gradient-to-br from-ink-800 to-ink-950 shadow-soft p-4 grid place-items-center">
      <div className="text-center">
        <p className="font-mono text-2xl tracking-wider text-white">ACTIVITY</p>
        <div className="mt-3 h-px w-32 mx-auto bg-white/40" />
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span className="h-2 w-2 rounded-full bg-white/60" />
        </div>
      </div>
    </div>
  );
}
