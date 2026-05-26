import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Activity,
  ArrowRight,
} from 'lucide-react';

const stats = [
  { label: 'Pipeline value', value: '$2.4M', delta: '+12.4%', icon: DollarSign, tone: 'mint' },
  { label: 'Active deals', value: '184', delta: '+8', icon: Target, tone: 'brand' },
  { label: 'Open accounts', value: '562', delta: '+24', icon: Users, tone: 'lilac' },
  { label: 'Win rate', value: '38%', delta: '+3.1%', icon: TrendingUp, tone: 'amber' },
];

const toneStyles: Record<string, string> = {
  mint: 'bg-mint-500/10 text-mint-600',
  brand: 'bg-brand-50 text-brand-600',
  lilac: 'bg-lilac-100 text-purple-700',
  amber: 'bg-amber-50 text-amber-700',
};

const agentEvents = [
  { tag: 'ACCOUNT INTELLIGENCE', color: 'bg-brand-50 text-brand-700', title: 'Acme Corp added 14 engineering roles', time: '2m ago' },
  { tag: 'LEAD SCORING', color: 'bg-purple-50 text-purple-700', title: 'Northwind Inc jumped 64 → 78', time: '8m ago' },
  { tag: 'DEAL COACH', color: 'bg-amber-50 text-amber-700', title: 'Globex Q3 contract: pricing objection flagged', time: '14m ago' },
  { tag: 'MEETING INTELLIGENCE', color: 'bg-mint-500/10 text-mint-700', title: '6 BANT fields extracted from Initech demo', time: '22m ago' },
  { tag: 'RELATIONSHIP SCORE', color: 'bg-rose-50 text-rose-700', title: 'Champion engagement decay on Stark Ind.', time: '1h ago' },
];

export default function DashboardPage() {
  return (
    <section className="py-10 lg:py-14">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Workspace overview</p>
            <h1 className="mt-2 font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-900">
              Good to see you back.
            </h1>
            <p className="mt-1.5 text-sm text-ink-500">
              Here's what your agents have been up to since you last logged in.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/agents"
              className="px-4 py-2 rounded-xl border border-ink-200 text-sm font-medium text-ink-800 hover:bg-white transition-colors"
            >
              View agents
            </Link>
            <Link
              to="/pipeline"
              className="px-4 py-2 rounded-xl bg-ink-950 text-white text-sm font-semibold hover:bg-ink-900 transition-colors inline-flex items-center gap-2"
            >
              Open pipeline <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <div className="flex items-center justify-between">
                <div className={`h-9 w-9 rounded-lg grid place-items-center ${toneStyles[s.tone]}`}>
                  <s.icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-mint-600 inline-flex items-center gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> {s.delta}
                </span>
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-ink-900">{s.value}</p>
              <p className="text-xs text-ink-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Body grid */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Activity feed */}
          <div className="lg:col-span-2 card p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-lg font-bold text-ink-900">Agent activity</h2>
                <p className="text-xs text-ink-500 mt-0.5">Live stream from your intelligence layer</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                <span className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" />
                Live
              </span>
            </div>
            <div className="mt-5 space-y-2">
              {agentEvents.map((e, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl border border-ink-100 hover:border-ink-200 hover:bg-lilac-50/40 transition-colors"
                >
                  <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${e.color}`}>
                    {e.tag}
                  </span>
                  <p className="flex-1 text-sm text-ink-800">{e.title}</p>
                  <span className="text-xs text-ink-400 whitespace-nowrap">{e.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side rail */}
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-brand-600" />
                <h2 className="font-display text-lg font-bold text-ink-900">Today's focus</h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {['Review 3 high-intent leads', 'Prep for Initech Q3 demo', 'Update Globex deal coach brief'].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-ink-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-ink-950 text-white">
              <p className="eyebrow text-brand-300">Insights</p>
              <h3 className="mt-2 font-display text-lg font-bold leading-tight">
                Your workspace is configured for IT Services
              </h3>
              <p className="mt-2 text-xs text-ink-300">
                Industry-specific taxonomy, KPIs, and agent flows are tuned to your business.
              </p>
              <Link
                to="/insights"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 hover:text-brand-200"
              >
                View configuration <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
