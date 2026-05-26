import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  BarChart3,
  Compass,
  Mic,
  Heart,
  ArrowRight,
  Clock,
  CheckCircle2,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import agentImg from '../assets/agentimg.svg'
  
type Agent = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  blurb: string;
  bullets: string[];
  footer: string;
  mock: 'feed' | 'score' | 'coach' | 'meeting' | 'relationship';
};

const agents: Agent[] = [
  {
    id: 'account-intelligence',
    label: 'Account Intelligence',
    icon: Search,
    title: 'Account Intelligence Agent',
    blurb: 'Monitors every account 24/7 for buying signals — so your reps never miss a moment.',
    bullets: [
      'Detects hiring surges',
      'Surfaces tech stack shifts',
      'Flags dormant accounts',
      'Drafts personalised outreach',
    ],
    footer: 'Scans every account, every 24 hours',
    mock: 'feed',
  },
  {
    id: 'lead-scoring',
    label: 'Lead Scoring',
    icon: BarChart3,
    title: 'Lead Scoring Agent',
    blurb: 'Prioritises leads automatically by ICP fit and intent — so reps spend time on the right people.',
    bullets: [
      'Realtime ICP scoring',
      'Behavioral intent weights',
      'Stack rank by likelihood',
      'Auto-tier list maintenance',
    ],
    footer: 'Re-scores leads on every signal',
    mock: 'score',
  },
  {
    id: 'deal-coach',
    label: 'Deal Coach',
    icon: Compass,
    title: 'Deal Coach Agent',
    blurb: 'Calls out blockers and next-best actions on every deal in your pipeline.',
    bullets: [
      'Identifies missing BANT',
      'Spots stalled deals',
      'Suggests next moves',
      'Pre-call briefs in seconds',
    ],
    footer: 'Runs on every stage change',
    mock: 'coach',
  },
  {
    id: 'meeting-intelligence',
    label: 'Meeting Intelligence',
    icon: Mic,
    title: 'Meeting Intelligence Agent',
    blurb: 'Transcribes, summarises, and extracts BANT from every sales call.',
    bullets: [
      'Auto BANT extraction',
      'Action item capture',
      'Sentiment tagging',
      'CRM sync in real time',
    ],
    footer: 'Joins every call automatically',
    mock: 'meeting',
  },
  {
    id: 'relationship-score',
    label: 'Relationship Score',
    icon: Heart,
    title: 'Relationship Score Agent',
    blurb: 'Tracks the health of every stakeholder relationship across channels.',
    bullets: [
      'Multi-channel engagement',
      'Champion / detractor tagging',
      'Decay alerts',
      'Renewal risk signals',
    ],
    footer: 'Recalculates daily',
    mock: 'relationship',
  },
];

/* ---- Per-agent mock visuals ---- */

function FeedMock() {
  return (
    <div className="bg-white rounded-2xl shadow-card border overflow-hidden">
      <img src={agentImg} alt="" />
    </div>
  );
}

function ScoreMock() {
  const leads = [
    { name: 'Acme Corp', score: 92, tier: 'A', color: 'bg-mint-500' },
    { name: 'Northwind', score: 78, tier: 'B', color: 'bg-brand-500' },
    { name: 'Globex', score: 64, tier: 'B', color: 'bg-amber-500' },
    { name: 'Initech', score: 41, tier: 'C', color: 'bg-rose-500' },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-card border border-ink-100 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-ink-900">Ranked Leads</p>
        <span className="text-[10px] font-mono text-brand-600">RESCORING…</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {leads.map((l) => (
          <div key={l.name} className="flex items-center gap-3">
            <span className={`h-7 w-7 rounded-lg grid place-items-center text-[10px] font-bold text-white ${l.color}`}>
              {l.tier}
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-ink-900">{l.name}</p>
              <div className="mt-1 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                <div className={`h-full ${l.color} rounded-full`} style={{ width: `${l.score}%` }} />
              </div>
            </div>
            <span className="text-xs font-mono text-ink-700 w-8 text-right">{l.score}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 pt-3 border-t border-ink-100">
        <TrendingUp className="h-3.5 w-3.5 text-mint-600" />
        <span className="text-xs text-ink-600">Northwind moved +14 since this morning</span>
      </div>
    </div>
  );
}

function CoachMock() {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-ink-100 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-ink-900">Globex Q3 Contract</p>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">STALLED</span>
      </div>
      <p className="text-xs text-ink-500 mt-1">$84,000 · Stage: Negotiation · 12 days idle</p>

      <div className="mt-4 space-y-2">
        <div className="p-2.5 rounded-lg border border-rose-200 bg-rose-50/40">
          <p className="text-[10px] font-bold tracking-wider text-rose-700">BLOCKER</p>
          <p className="text-xs text-ink-800 mt-0.5">Missing pricing approval from procurement</p>
        </div>
        <div className="p-2.5 rounded-lg border border-brand-200 bg-brand-50/40">
          <p className="text-[10px] font-bold tracking-wider text-brand-700">NEXT BEST ACTION</p>
          <p className="text-xs text-ink-800 mt-0.5">Loop in CFO with ROI deck — 84% similar deals close after this</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-1.5">
        {['B', 'A', 'N', 'T'].map((b, i) => (
          <div
            key={b}
            className={`text-center py-1.5 rounded text-[10px] font-bold ${
              i < 3 ? 'bg-mint-500/10 text-mint-700' : 'bg-rose-50 text-rose-700'
            }`}
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}

function MeetingMock() {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-ink-100 overflow-hidden">
      <div className="px-4 py-3 bg-ink-950 text-white flex items-center gap-2">
        <Mic className="h-3.5 w-3.5 text-mint-400" />
        <p className="text-xs font-semibold">Initech · Demo Call</p>
        <span className="ml-auto text-[10px] font-mono text-ink-300">42:18</span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="text-[10px] font-bold tracking-wider text-brand-700">TRANSCRIPT</p>
          <div className="mt-1.5 space-y-1.5">
            <div className="flex gap-2">
              <span className="h-4 w-4 rounded-full bg-brand-500 shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-3/4 rounded bg-ink-200" />
                <div className="h-1.5 w-1/2 rounded bg-ink-200" />
              </div>
            </div>
            <div className="flex gap-2">
              <span className="h-4 w-4 rounded-full bg-purple-500 shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-2/3 rounded bg-ink-200" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-wider text-brand-700">BANT EXTRACTED</p>
          <div className="mt-1.5 space-y-1.5">
            {['Budget: $50–80k confirmed', 'Authority: VP Sales involved', 'Need: Pipeline visibility', 'Timeline: Q1 launch'].map((b) => (
              <div key={b} className="flex items-center gap-2 text-xs text-ink-700">
                <CheckCircle2 className="h-3 w-3 text-mint-600" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RelationshipMock() {
  const people = [
    { name: 'Sarah Chen', role: 'Champion', score: 94, color: 'bg-mint-500' },
    { name: 'Mark Liu', role: 'Influencer', score: 71, color: 'bg-brand-500' },
    { name: 'James Park', role: 'Decision Maker', score: 58, color: 'bg-amber-500' },
    { name: 'Anna Ross', role: 'Detractor', score: 22, color: 'bg-rose-500' },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-card border border-ink-100 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-ink-900">Stark Industries · Stakeholders</p>
        <span className="text-[10px] font-mono text-ink-500">DAILY SYNC</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {people.map((p) => (
          <div key={p.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-lilac-50 transition-colors">
            <span className={`h-8 w-8 rounded-full ${p.color} grid place-items-center text-[10px] font-bold text-white`}>
              {p.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-ink-900">{p.name}</p>
              <p className="text-[10px] text-ink-500">{p.role}</p>
            </div>
            <span className="text-xs font-mono text-ink-700">{p.score}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 pt-3 border-t border-ink-100">
        <Heart className="h-3.5 w-3.5 text-rose-500" />
        <span className="text-xs text-ink-600">Anna's engagement dropped 38% this week</span>
      </div>
    </div>
  );
}

function AgentMock({ kind }: { kind: Agent['mock'] }) {
  switch (kind) {
    case 'feed':
      return <FeedMock />;
    case 'score':
      return <ScoreMock />;
    case 'coach':
      return <CoachMock />;
    case 'meeting':
      return <MeetingMock />;
    case 'relationship':
      return <RelationshipMock />;
  }
}

export default function AgentsPage() {
  const [params, setParams] = useSearchParams();
  const initial = params.get('tab') || agents[0].id;
  const [active, setActive] = useState<string>(
    agents.find((a) => a.id === initial) ? initial : agents[0].id,
  );

  // Sync URL → state when nav changes the query
  useEffect(() => {
    const t = params.get('tab');
    if (t && agents.some((a) => a.id === t) && t !== active) setActive(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  // State → URL (so the tab is shareable / preserved on reload)
  function selectAgent(id: string) {
    setActive(id);
    const next = new URLSearchParams(params);
    next.set('tab', id);
    setParams(next, { replace: true });
  }

  const current = agents.find((a) => a.id === active)!;

  return (
    <>
      <section className="py-14 lg:py-20">
        <div className="container-x text-center">
          <p className="eyebrow">How it works</p>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.1]">
            5 agents. Always watching. <br /> Always ready.
          </h1>
          <p className="mt-5 text-ink-500 max-w-2xl mx-auto">
            Each agent specialises in one job and does it better than any human could at scale. Together, they form an autonomous intelligence layer across your entire pipeline.
          </p>

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {agents.map((a) => (
              <button
                key={a.id}
                onClick={() => selectAgent(a.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                  active === a.id
                    ? 'border-brand-500 text-brand-700 bg-white shadow-card'
                    : 'border-transparent text-ink-600 bg-white/60 hover:bg-white'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          {/* Active agent card */}
          <div
            key={current.id}
            className="mt-10 card p-6 lg:p-10 grid lg:grid-cols-2 gap-8 items-center text-left shadow-soft animate-fade-in"
          >
            <div>
              <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                <current.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">{current.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{current.blurb}</p>
              <ul className="mt-5 space-y-2.5">
                {current.bullets.map((b) => (
                  <li key={b} className="text-sm text-ink-700 flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-lilac-50 border border-ink-100 text-xs font-semibold text-ink-700">
                <Clock className="h-3.5 w-3.5 text-brand-600" />
                {current.footer}
              </div>
            </div>

            <AgentMock kind={current.mock} />
          </div>
        </div>
      </section>

      {/* CTA dark band */}
{/* CTA dark band */}
<section className="bg-[linear-gradient(108.79deg,_#131B2E_47.61%,_#1947AB_108.67%)] text-white py-8 mx-4 lg:mx-[138px] rounded-3xl mb-12">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
              Ready to deploy your{' '}
              <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                intelligence layer
              </span>
              ?
            </h2>
            <p className="mt-4 text-ink-300 max-w-md">
              Join 200+ enterprise teams moving from manual workflows to autonomous agentic systems.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="px-5 py-2.5 rounded-xl bg-white text-ink-900 text-sm font-semibold hover:shadow-soft transition-shadow inline-flex items-center gap-2"
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          <div className="bg-ink-900 rounded-2xl p-3 shadow-soft border border-ink-800">
            <div className="bg-ink-950 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-ink-300 font-semibold">Sales · Pipeline View</p>
                <span className="text-[10px] text-ink-500 font-mono">LIVE</span>
              </div>
              <div className="mt-4 h-28 bg-gradient-to-tr from-brand-600/40 to-purple-500/30 rounded-lg relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <polyline
                    points="0,45 25,32 50,38 75,22 100,28 125,12 150,18 175,8 200,14"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-6 gap-1 items-end h-16">
                {[40, 65, 50, 80, 55, 90].map((h, i) => (
                  <div
                    key={i}
                    className="bg-ink-700 rounded-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                <div className="rounded bg-ink-800 px-2 py-1.5">
                  <p className="text-ink-400">Pipeline</p>
                  <p className="text-white font-bold">$2.4M</p>
                </div>
                <div className="rounded bg-ink-800 px-2 py-1.5">
                  <p className="text-ink-400">Deals</p>
                  <p className="text-white font-bold">184</p>
                </div>
                <div className="rounded bg-ink-800 px-2 py-1.5">
                  <p className="text-ink-400">Win rate</p>
                  <p className="text-white font-bold">38%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
