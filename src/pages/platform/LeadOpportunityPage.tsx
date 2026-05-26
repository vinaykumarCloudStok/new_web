import { LayoutGrid, SlidersHorizontal, LogIn, BarChart2, TrendingUp } from 'lucide-react';
import FeatureCard from '../../components/ui/FeatureCard';
import leadImg from '../../assets/leadimg.svg'
export default function LeadOpportunityPage() {
  return (
    <>
      <section className="bg-[#f9f9ff]">
        <div className="container-x py-16 lg:py-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-[#0339AF]">Lead &amp; Opportunity Management</p>
            <h1 className="mt-4 font-display text-3xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-tight">
              Manage Your Pipeline with Precision, From First Lead to Closed Won.
            </h1>
            <p className="mt-5 text-[#424754] max-w-lg">
              A leaky pipeline is a revenue problem. Ascoyo's Lead &amp; Opportunity module gives your sales team full visibility into every deal stage, so you always know what's progressing, what's stalled, and where to focus next.
            </p>
            <p className="mt-4 text-[#424754] max-w-lg">
              Create custom pipeline stages that match your actual sales process. Track deal value, close probability, next steps, and activity history in one view. Forecast revenue with confidence and never let a hot lead go cold again.
            </p>
          </div>
        <div className="w-full flex justify-center lg:justify-end">
  <img
    src={leadImg}
    alt="Lead Opportunity"
    className="
      w-full
      max-w-[650px]
      h-auto
      object-contain
      lg:max-h-[520px]
    "
  />
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
              icon={LayoutGrid}
              title="Visual drag-and-drop pipeline management"
              description="Move deals through your pipeline the way you actually think about them. A clear, visual board that keeps every opportunity accounted for."
            />
            <FeatureCard
              icon={SlidersHorizontal}
              title="Custom deal stages and fields"
              description="Build a pipeline that mirrors your real sales process, not a generic template. Every field, every stage, set up exactly the way your team works."
            />
            <FeatureCard
              icon={LogIn}
              title="Lead capture from web forms, email, and integrations"
              description="Leads flow straight into your CRM from wherever they come from. No copy-pasting, no lost prospects, no manual imports."
            />
            <FeatureCard
              icon={BarChart2}
              title="Win/loss tracking and analysis"
              description="Know exactly why deals are won and why they are lost. Use that data to sharpen your process and stop repeating the same mistakes."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Revenue forecasting by stage, rep, or team"
              description="Get a reliable view of what is likely to close and when. Make confident calls to leadership without scrambling through spreadsheets."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <div className="card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink-900">
                From Lead to Close, <br /> Without the Chaos
              </h2>
              <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                Most CRMs force you to adapt to their pipeline. Ascoyo adapts to yours. Build stages that reflect how you actually sell, and get a real-time view of every opportunity in your funnel so nothing falls through the cracks.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-lilac-50 to-brand-50 p-6 lg:p-8 space-y-3">
              <StageRow label="Qualifying" deals="12 Deals" />
              <StageRow label="Proposal" deals="8 Deals" indent />
              <StageRow label="Closing" deals="4 Deals" indentMore />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StageRow({
  label,
  deals,
  indent,
  indentMore,
}: {
  label: string;
  deals: string;
  indent?: boolean;
  indentMore?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between bg-[#0058BE33] px-4 py-3 rounded-xl ${
        indent ? 'ml-4' : indentMore ? 'ml-8' : ''
      }`}
    >
      <span className="text-sm font-semibold text-brand-800">{label}</span>
      <span className="text-sm text-brand-800">{deals}</span>
    </div>
  );
}
