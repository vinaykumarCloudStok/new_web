import { useState } from 'react';
import { Search, SlidersHorizontal, Bot, FileText, Network, Check, Download, ChevronDown, X } from 'lucide-react';
import firstW from '../assets/Ascoyo whitepaper Agentic CRM Playbook.pdf'
const papers = [
  {
    id: 'agentic',
    tags: ['AI Agents', 'CRM Strategy'],
    title: 'The Agentic CRM Playbook:',
    titleAccent: 'How AI Agents Are Replacing Manual Sales Work',
    desc: 'A practical guide to understanding how agentic AI is changing the way B2B sales teams manage pipelines, relationships, and revenue, and how to build the right stack to stay ahead.',
    minutes: '14 Mins Read',
    visual: <Bot className="h-14 w-14 text-brand-300" strokeWidth={1.2} />,
    bg: 'bg-[#D3E2ED]',
    // PDF file lives in /public so it's served from the site root
    file: firstW,
    filename: 'Ascoyo-Agentic-CRM-Playbook.pdf',
  },
  {
    id: 'spreadsheets',
    tags: ['CRM Adoption', 'Sales Operations'],
    title: 'From Spreadsheets to Intelligence:',
    titleAccent: "The B2B Leader's Guide to Modern CRM Adoption",
    desc: 'Why most CRM implementations fail, what the highest-performing B2B teams do differently, and a step-by-step framework for rolling out a CRM your team will actually use.',
    minutes: '14 Mins Read',
    visual: <FileText className="h-14 w-14 text-ink-300" strokeWidth={1.2} />,
    bg: 'bg-[#E8E8E8]',
    file: '/whitepapers/Ascoyo_whitepaper_Agentic_CRM_Playbook.pdf',
    filename: 'Ascoyo-Modern-CRM-Adoption.pdf',
  },
  {
    id: 'relationship',
    tags: ['Relationship Intelligence', 'Revenue Strategy'],
    title: 'Relationship Intelligence:',
    titleAccent: 'The Hidden Driver of B2B Revenue Growth',
    desc: 'New research on how the health of your buyer relationships predicts revenue outcomes, and how leading sales teams are using relationship scoring to retain accounts and accelerate deals.',
    minutes: '14 Mins Read',
    visual: <Network className="h-14 w-14 text-brand-400" strokeWidth={1.2} />,
    bg: 'bg-[#ACC7FF]',
    file: '/whitepapers/Ascoyo_whitepaper_Agentic_CRM_Playbook.pdf',
    filename: 'Ascoyo-Relationship-Intelligence.pdf',
  },
  {
    id: 'aiready',
    tags: ['AI Strategy', 'Sales Leadership'],
    title: 'The AI-Ready Sales Team:',
    titleAccent: 'A Framework for Building Human and Agent Collaboration',
    desc: 'A leadership guide to structuring sales teams for the AI era, including how to define the roles AI agents play, where human judgment stays essential, and how to measure performance across both.',
    minutes: '14 Mins Read',
    visual: (
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full ${i === 4 ? 'bg-brand-500' : 'bg-white/30'}`}
          />
        ))}
      </div>
    ),
    bg: 'bg-[#001B3D]',
    dark: true,
    file: '/whitepapers/Ascoyo_whitepaper_Agentic_CRM_Playbook.pdf',
    filename: 'Ascoyo-AI-Ready-Sales-Team.pdf',
  },
];

type Paper = typeof papers[number];

// Programmatic download: creates a hidden <a download> and clicks it.
// Works for same-origin files served from /public.
function triggerDownload(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function ResourcesPage() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Paper | null>(null);
  const [downloaded, setDownloaded] = useState(false);
  const [lastDownloaded, setLastDownloaded] = useState<Paper | null>(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', teamSize: '1-20' });

  function submitDownload() {
    if (!selected) return;

    // Basic guard: require name + email before firing the download
    if (!form.name.trim() || !form.email.trim()) {
      return;
    }

    // Kick off the actual PDF download
    triggerDownload(selected.file, selected.filename);

    // Remember which paper was downloaded so "Download Again" works
    setLastDownloaded(selected);
    setSelected(null);
    setDownloaded(true);
  }

  function downloadAgain() {
    if (lastDownloaded) {
      triggerDownload(lastDownloaded.file, lastDownloaded.filename);
    }
  }

  const filtered = papers.filter((p) =>
    (p.title + p.titleAccent + p.desc).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="bg-grad-hero">
        <div className="container-x py-16 lg:py-20 text-center">
          <p className="eyebrow">Ascoyo Research Library</p>
          <h1 className="mt-3 font-display text-3xl lg:text-5xl font-extrabold text-ink-900 leading-tight">
            Research and Insights for Modern B2B Sales Teams
          </h1>
          <p className="mt-5 text-ink-500 max-w-2xl mx-auto">
            Practical research, frameworks, and data to help you build smarter sales processes, adopt AI with confidence, and grow revenue without growing headcount
          </p>

          <div className="mt-10 max-w-2xl mx-auto card rounded-full shadow-soft flex items-center pl-5 pr-1 py-1">
            <Search className="h-4 w-4 text-ink-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search research papers..."
              className="flex-1 px-3 py-2 outline-none text-sm placeholder:text-ink-400"
            />
            <button className="hidden sm:inline-flex items-center gap-1.5 text-sm text-ink-600 px-3">
              Filter <SlidersHorizontal className="h-3.5 w-3.5" />
            </button>
            <span className="h-6 w-px bg-ink-100 mx-1" />
            <button className="px-5 py-2 rounded-full bg-ink-900 text-white text-sm font-semibold hover:bg-ink-800 transition-colors">
              Find
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-ink-900">Latest Whitepapers</h2>
          <p className="text-sm text-ink-500 mt-1">{filtered.length} Featured Publications</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="card overflow-hidden flex flex-col hover:shadow-soft transition-shadow">
                <div
                  className={`aspect-[16/8] grid place-items-center bg-gradient-to-br ${p.bg} ${
                    p.dark ? 'text-white' : ''
                  }`}
                >
                  {p.visual}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900 leading-snug">
                    {p.title}{' '}
                    <span className="text-ink-500 font-normal">{p.titleAccent}</span>
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                  <div className="mt-5 pt-5 border-t border-ink-100 flex items-center justify-between">
                    <span className="text-xs text-ink-500">{p.minutes}</span>
                    <button
                      onClick={() => setSelected(p)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-ink-900 text-white text-xs font-semibold hover:bg-ink-800"
                    >
                      Download Free <Download className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Download form modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-soft animate-fade-up max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 h-9 w-9 rounded-lg grid place-items-center text-ink-500 hover:bg-ink-50">
              <X className="h-5 w-5" />
            </button>
            <div className="grid sm:grid-cols-[40%_60%]">
              <div className={`bg-gradient-to-br ${selected.bg} p-6 sm:p-8 flex flex-col`}>
                <div className="aspect-square rounded-2xl bg-white/60 grid place-items-center max-h-40">
                  {selected.visual}
                </div>
                <div className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
                      WHITEPAPER
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
                      2025 OUTLOOK
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-xl font-bold text-ink-900 leading-snug">
                    {selected.title} {selected.titleAccent}
                  </h4>
                  <p className="mt-3 text-xs text-ink-600 leading-relaxed">{selected.desc}</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-ink-900">Download Whitepaper</h3>
                <p className="text-sm text-ink-500 mt-1">Access the full research guide instantly.</p>

                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label">Name</label>
                      <input className="input" placeholder="Jane Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="label">Work Email</label>
                      <input className="input" type="email" placeholder="jane@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="label">Company Name</label>
                    <input className="input" placeholder="Acme Inc" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                  </div>
                  <div>
                    <label className="label">Team Size</label>
                    <div className="relative">
                      <select className="input appearance-none pr-9" value={form.teamSize} onChange={(e) => setForm({ ...form, teamSize: e.target.value })}>
                        <option>1-20</option>
                        <option>21-100</option>
                        <option>101-500</option>
                        <option>500+</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
                    </div>
                  </div>
                  <button
                    onClick={submitDownload}
                    disabled={!form.name.trim() || !form.email.trim()}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Download PDF <Download className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-ink-400 mt-1 text-center">
                    PDF download will start instantly after submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Download ready modal */}
      {downloaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setDownloaded(false)} />
          <div className="relative w-full max-w-sm bg-white rounded-2xl p-8 sm:p-10 shadow-soft text-center animate-fade-up">
            <div className="mx-auto h-16 w-16 rounded-full bg-mint-500/10 grid place-items-center">
              <div className="h-12 w-12 rounded-full bg-mint-500 grid place-items-center">
                <Check className="h-6 w-6 text-white" strokeWidth={3} />
              </div>
            </div>
            <p className="mt-5 text-xs font-bold tracking-[0.18em] uppercase text-mint-600">
              Whitepaper Ready
            </p>
            <h3 className="font-display text-2xl font-bold text-ink-900 mt-1.5">
              Your download is Ready
            </h3>
            <p className="text-sm text-ink-500 mt-2">
              We've started your PDF download and sent a confirmation email with the download link.
            </p>
            <button onClick={() => setDownloaded(false)} className="btn-primary w-full mt-6">
              Continue Browsing
            </button>
            <button onClick={downloadAgain} className="mt-3 text-sm text-ink-600 inline-flex items-center gap-1.5 hover:text-ink-900">
              <Download className="h-3.5 w-3.5" /> Download Again
            </button>
            <p className="text-xs text-ink-400 mt-4 pt-4 border-t border-ink-100">
              Check your inbox if the download does not start automatically.
            </p>
          </div>
        </div>
      )}
    </>
  );
}