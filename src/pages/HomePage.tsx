import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Workflow,
  Heart,
  Bot,
  BarChart3,
  Compass,
  Mic,
  ShieldCheck,
  Database,
  Lock,
  Server,
} from 'lucide-react';
import SignupModal from '../components/modals/SignupModal';
import LoginModal from '../components/modals/LoginModal';

export default function HomePage() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-grad-hero">
        <div className="container-x pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-[11px] font-semibold tracking-[0.14em] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                Agentic CRM Platform
              </span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
                Your CRM should{' '}
                <span className="text-brand-600">work</span> <br className="hidden sm:block" />
                while you sell.
              </h1>
              <p className="mt-5 text-lg text-ink-500 max-w-xl leading-relaxed">
                Ascoyo embeds 5 AI agents into your sales workflow. They monitor accounts, score leads,
                coach reps, capture meetings, and track every relationship — so nothing falls through the cracks.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button onClick={() => setSignupOpen(true)} className="btn-primary">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/contact" className="btn-secondary">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <a
                href="#preview"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
              >
                <Play className="h-3.5 w-3.5 fill-current" /> Watch 2-min overview
              </a>

              <div className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  Trusted by sales teams at
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                  {['Cloudstok', 'NexaTech', 'BrightWave', 'Meridian', 'Quantix'].map((n) => (
                    <span
                      key={n}
                      className="font-display text-xl text-ink-300 font-semibold tracking-tight"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard mock */}
            <div id="preview" className="relative animate-fade-up [animation-delay:120ms]">
              <div className="absolute -inset-x-6 -inset-y-8 bg-gradient-to-br from-brand-100 to-transparent rounded-3xl blur-2xl -z-10" />
              <div className="bg-ink-950 rounded-2xl p-3 shadow-soft">
                <div className="flex items-center justify-between px-2 py-1.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-ink-300">
                    <Lock className="h-3 w-3" /> Ascoyo — Dashboard
                  </div>
                  <span />
                </div>
                <div className="bg-white rounded-xl p-5">
                  <p className="text-xs font-semibold text-ink-500">Good morning, Alex</p>
                  <p className="text-lg font-semibold text-ink-900">
                    Here's what your agents found today
                  </p>

                  <div className="mt-5 space-y-3">
                    <Insight
                      color="bg-brand-500"
                      title="Account Intelligence"
                      time="2 min ago"
                      body={
                        <>
                          Hiring surge at <b>BrightWave</b> — 12 new IT roles posted
                        </>
                      }
                    />
                    <Insight
                      color="bg-purple-500"
                      title="Lead Scoring"
                      time="18 min ago"
                      body={
                        <>
                          <b>Priya Sharma</b> score jumped to 84 (Hot) after demo attendance
                        </>
                      }
                    />
                    <Insight
                      color="bg-amber-500"
                      title="Deal Coach"
                      time="1 hr ago"
                      body={
                        <>
                          Pre-call brief ready for <b>Meridian</b> CTO meeting at 2pm
                        </>
                      }
                    />
                  </div>

                  <div className="mt-5 p-4 rounded-xl bg-lilac-50 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold">
                        Pipeline
                      </p>
                      <p className="text-2xl font-bold text-ink-900 font-display">₹2.4Cr</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-brand-600 grid place-items-center text-white">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT SYSTEM */}
      <section className="bg-lilac-50 py-20 lg:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-900 tracking-tight">
              A Team of Autonomous Agents
            </h2>
            <p className="mt-3 text-ink-500">
              Five specialized agents work in tandem to eliminate 80% of your administrative burden.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { i: Bot, t: 'Account Intel', s: 'Synthesizes news, financials, and hiring trends for target accounts.', tag: 'Monitoring', tagColor: 'text-brand-600 bg-brand-50' },
              { i: BarChart3, t: 'Lead Scoring', s: 'Prioritizes leads based on intent signals and ICP fit autonomously.', tag: 'Ranking', tagColor: 'text-purple-600 bg-purple-50' },
              { i: Compass, t: 'Deal Coach', s: 'Identifies blockers and recommends next-best actions for every deal.', tag: 'Advising', tagColor: 'text-amber-600 bg-amber-50' },
              { i: Mic, t: 'Meeting Intel', s: 'Transcribes and extracts action items from every sales call.', tag: 'Capturing', tagColor: 'text-mint-600 bg-mint-500/10' },
              { i: Heart, t: 'Relationship Score', s: 'Gauges account health using multi-channel engagement data.', tag: 'Analyzing', tagColor: 'text-rose-600 bg-rose-50' },
            ].map((c, idx) => (
              <div key={c.t} className="card p-5 hover:shadow-soft transition-all">
                <div className={`h-10 w-10 rounded-xl grid place-items-center ${c.tagColor}`}>
                  <c.i className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-semibold text-ink-900">{c.t}</h4>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{c.s}</p>
                <div className="mt-4 inline-flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${idx % 2 ? 'bg-purple-500' : 'bg-brand-500'}`} />
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-ink-500">
                    {c.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZERO MANUAL LOGGING */}
      <section className="bg-ink-950 text-white py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-ink-900/60 border border-ink-800 rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-3 pb-4 border-b border-ink-800">
              <div className="h-10 w-10 rounded-xl bg-ink-800 grid place-items-center">
                <Workflow className="h-4 w-4 text-brand-300" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-ink-300">
                  Syncing from Read.ai
                </p>
                <p className="text-sm font-semibold">Product Strategy Sync</p>
              </div>
              <div className="ml-auto h-6 w-6 rounded-full bg-mint-500/20 grid place-items-center">
                <CheckCircle2 className="h-4 w-4 text-mint-500" />
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm font-mono">
              <p>
                <span className="text-brand-300">SUMMARY:</span>{' '}
                <span className="text-ink-200">
                  Client expressed interest in Enterprise plan but requires HIPAA compliance documentation.
                </span>
              </p>
              <p>
                <span className="text-amber-400">ACTION ITEM:</span>{' '}
                <span className="text-ink-200">Send Compliance Deck to Sarah before Friday.</span>
              </p>
              <p>
                <span className="text-purple-300">CONTACT:</span>{' '}
                <span className="text-ink-200">
                  New stakeholder "David Chen" identified. Added to CRM.
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Zero Manual Logging. Ever.
            </h2>
            <p className="mt-4 text-ink-300 max-w-lg">
              Ascoyo integrates directly with your meeting tools. Our agents extract the "who, what, and when"
              from every conversation, updating your CRM before you've even closed your laptop.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                'Direct Read.ai & Otter.ai Sync',
                'Automated Contact Discovery',
                'Context-Aware Action Items',
              ].map((s) => (
                <li key={s} className="flex items-center gap-3 text-ink-200">
                  <CheckCircle2 className="h-5 w-5 text-mint-500" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ADAPTS TO INDUSTRY */}
      <section className="bg-gradient-to-b from-ink-100/50 to-white py-8">
        <div className="container-x">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-ink-900">
            Adapts to your Industry
          </h2>

          <div className="mt-12 max-w-5xl mx-auto card p-6 lg:p-10 grid lg:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow text-ink-500">Industry Template</p>
              <div className="mt-4 space-y-2">
                <RadioRow label="IT Services" checked />
                <RadioRow label="Professional Services" />
              </div>

              <p className="mt-7 text-sm font-semibold text-ink-900">Module Controls</p>
              <div className="mt-3 space-y-3">
                <Toggle label="SLA Tracking" on />
                <Toggle label="Project Profitability" on />
                <Toggle label="Inventory Mgmt" />
              </div>
            </div>

            <div className="bg-lilac-50 rounded-2xl p-6 lg:p-8 text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-brand-600 grid place-items-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mt-4 text-ink-900">
                Morphing into IT Services Mode
              </h3>
              <p className="mt-2 text-sm text-ink-500">
                We've pre-configured your pipeline for RFP tracking, MSA renewals, and technical staffing workflows.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                <Enabled title="Contract Value AI" />
                <Enabled title="Bench Analytics" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="bg-white py-8">
        <div className="container-x">
          <div className="card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center bg-lilac-50/40 border-ink-100">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink-900 leading-tight">
                Enterprise Grade <br /> Security &amp; Compliance
              </h2>
              <p className="mt-4 text-sm text-ink-500 max-w-md">
                Your data is governed by the highest global standards. We are built for mission-critical operations in regulated industries.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Badge label="HIPAA US" />
                <Badge label="DPDP INDIA" />
                <Badge label="SOC 2 TYPE II" />
              </div>
            </div>

            <div className="space-y-4">
              <SecRow
                icon={Server}
                title="Regional Data Residency"
                desc="Keep your data in Mumbai, Sydney, or Virginia with localized residency options."
              />
              <SecRow
                icon={ShieldCheck}
                title="End-to-End Encryption"
                desc="Advanced AES-256 encryption for both data at rest and in transit."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[linear-gradient(282.44deg,_#0339AF_-6.18%,_#131B2E_107.54%)] py-16">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
            Ready to let your CRM work for you?
          </h2>
          <p className="text-brand-100 mt-3 max-w-xl mx-auto">
            Join 500+ enterprises who have regained 12 hours of selling time per week.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => setSignupOpen(true)} className="px-6 py-2.5 rounded-xl bg-white text-ink-900 text-sm font-semibold hover:shadow-soft transition-shadow">
              Start your free trial
            </button>
            <Link to="/contact" className="px-6 py-2.5 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <SignupModal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSwitchToLogin={() => {
          setSignupOpen(false);
          setLoginOpen(true);
        }}
      />
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToSignup={() => {
          setLoginOpen(false);
          setSignupOpen(true);
        }}
      />
    </>
  );
}

function Insight({
  color,
  title,
  time,
  body,
}: {
  color: string;
  title: string;
  time: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 items-start">
      <span className={`mt-1.5 h-2 w-2 rounded-full ${color}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink-900">{title}</p>
          <span className="text-[10px] text-ink-400 shrink-0">{time}</span>
        </div>
        <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function RadioRow({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-ink-100">
      <div className="flex items-center gap-2">
        <Database className="h-4 w-4 text-ink-400" />
        <span className="text-sm font-medium text-ink-800">{label}</span>
      </div>
      <span
        className={`h-4 w-4 rounded-full ring-2 ring-offset-2 ${
          checked ? 'bg-brand-600 ring-brand-600' : 'ring-ink-200'
        }`}
      />
    </div>
  );
}

function Toggle({ label, on }: { label: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-sm ${on ? 'text-ink-800' : 'text-ink-400'}`}>{label}</span>
      <span
        className={`relative h-5 w-9 rounded-full transition-colors ${
          on ? 'bg-brand-600' : 'bg-ink-200'
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
            on ? 'left-[18px]' : 'left-0.5'
          }`}
        />
      </span>
    </div>
  );
}

function Enabled({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-ink-100">
      <p className="text-[10px] tracking-[0.18em] uppercase text-mint-600 font-bold">Enabled</p>
      <p className="text-sm font-semibold text-ink-900 mt-0.5">{title}</p>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="px-3 py-2 bg-white border border-ink-100 rounded-lg text-[10px] tracking-[0.14em] uppercase font-bold text-ink-700">
      {label}
    </div>
  );
}

function SecRow({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex gap-3 p-4 rounded-xl bg-white border border-ink-100">
      <div className="h-9 w-9 shrink-0 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink-900">{title}</p>
        <p className="text-xs text-ink-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}
