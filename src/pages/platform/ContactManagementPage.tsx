import { FileText, Sparkles, Network, BarChart3, Bell } from 'lucide-react';
import FeatureCard from '../../components/ui/FeatureCard';
import thirdImg from '../../assets/thirdimg.svg'
import fourImg from '../../assets/fourimg.svg'
export default function ContactManagementPage() {
  return (
    <>
      <section className="bg-[#f9f9ff]">
        <div className="container-x py-20 lg:py-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-[#0339AF]">Contact Management</p>
            <h1 className="mt-4 font-display text-4xl lg:text-5xl font-bold leading-tight">
              Every Stakeholder. Every Interaction. Always at Your Fingertips.
            </h1>
            <p className="mt-5 text-[#424754] max-w-lg">
              In B2B sales, deals don't happen with companies. They happen with people. Ascoyo's Contact Management module helps you track every key stakeholder, decision-maker, and champion across your accounts so you always know who to call, what was said, and exactly what comes next.
            </p>
            <p className="mt-4 text-[#424754] max-w-lg">
              Log calls, emails, meetings, and notes automatically. Build a living record of every relationship your team has ever cultivated and make sure that knowledge stays with your company, not just one rep.
            </p>
          </div>
          <div className="h-auto w-auto sm:h-[500px]">
           <img src={thirdImg} className='h-full w-full' alt="" />
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
              icon={FileText}
              title="Complete contact profiles with interaction history"
              description="Every stakeholder gets a full profile that grows with every touchpoint. Your team always knows the history before starting a conversation."
            />
            <FeatureCard
              icon={Sparkles}
              title="Auto-capture of emails, calls, and meeting notes"
              description="No more manual logging after every interaction. Ascoyo captures activity automatically so reps can focus on selling, not admin."
            />
            <FeatureCard
              icon={Network}
              title="Stakeholder mapping across accounts"
              description="Visualize every decision-maker and influencer within an account. Know exactly who holds the power and who needs to be onboarded."
            />
            <FeatureCard
              icon={BarChart3}
              title="Contact scoring based on engagement"
              description="See which contacts are most active and most responsive at a glance. Prioritize outreach based on real signals, not guesswork."
            />
            <FeatureCard
              icon={Bell}
              title="Smart reminders for relationship follow-ups"
              description="Never let a warm contact go cold because life got busy. Ascoyo nudges your team at exactly the right time to keep relationships moving."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <div className="card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink-900">
                Stop Losing Context When Reps Churn
              </h2>
              <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                When a rep leaves, their relationships shouldn't leave with them. Ascoyo preserves the full history of every contact interaction so your team can pick up where anyone left off, seamlessly.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/12] grid place-items-center">
            <img src={fourImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


