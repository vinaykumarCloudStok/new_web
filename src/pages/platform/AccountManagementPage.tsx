import { UserCircle2, GitBranch, History, Layers, Users } from 'lucide-react';
import FeatureCard from '../../components/ui/FeatureCard';
import firstImg from '../../assets/crmfirst.svg'
import secondImg from '../../assets/whychoose.svg'
export default function AccountManagementPage() {
  return (
    <>
      <section className="bg-[#f9f9ff] ">
        <div className="container-x py-20 lg:py-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-[#0339AF]">Account Management</p>
            <h1 className="mt-4 font-display text-[#191B23] text-4xl lg:text-5xl font-bold leading-tight">
              Centralize Every Account. <br /> Know Every Relationship.
            </h1>
            <p className="mt-5 text-[#424754] max-w-lg">
              Managing B2B accounts across spreadsheets, emails, and disconnected tools is a guaranteed way to lose context and miss deals. Ascoyo's Account Management module gives your team a single source of truth for every account, from first touch to long-term retention.
            </p>
            <p className="mt-4 text-[#424754] max-w-lg">
              Track company hierarchies, relationship history, engagement activity, and key stakeholders all in one place. Whether you're managing 50 accounts or 5,000, Ascoyo ensures no detail slips through the cracks.
            </p>
          </div>
          <div className="h-auto w-auto sm:h-[500px]">
           <img src={firstImg} className='h-full w-full' alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#f2f3fd] py-8">
        <div className="container-x">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-ink-900">
            Key Features
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon={UserCircle2}
              title="Unified account profiles with full relationship history"
              description="Every interaction, deal, and note tied to one account record. Your team always has the full picture before they pick up the phone."
            />
            <FeatureCard
              icon={GitBranch}
              title="Company hierarchy and org chart mapping"
              description="See exactly how a company is structured and who reports to whom. Never walk into a deal blind about the people who matter."
            />
            <FeatureCard
              icon={History}
              title="Activity timelines across all touchpoints"
              description="Every email, call, and meeting logged in chronological order. One scroll tells you everything that's ever happened with an account."
            />
            <FeatureCard
              icon={Layers}
              title="Custom account segmentation and tagging"
              description="Group accounts by industry, deal size, stage, or any criteria you choose. Filter, prioritize, and act on the segments that matter most."
            />
            <FeatureCard
              icon={Users}
              title="Real-time collaboration across your sales team"
              description="Everyone on the team sees the same account data at the same time. No more siloed updates or duplicated outreach."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <div className="card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink-900">
                Why B2B Teams Choose Ascoyo for Account Management
              </h2>
              <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                Managing accounts shouldn't feel like archaeology. With Ascoyo, every interaction, deal, note, and document is organized, searchable, and accessible, giving your team the context they need to show up to every conversation prepared.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/12] grid place-items-center">
            <img src={secondImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
