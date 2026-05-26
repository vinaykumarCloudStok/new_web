import { Sparkles, Users2, Bell, FileSpreadsheet, BarChart3, Mail } from 'lucide-react';
import FeatureCard from '../../components/ui/FeatureCard';
import activity from '../../assets/activity.svg'
export default function ActivityTaskPage() {
  return (
    <>
      <section className="bg-grad-hero">
        <div className="container-x py-16 lg:py-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-[#0339AF]">Activity &amp; Task</p>
            <h1 className="mt-4 font-display text-3xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-tight">
              Never Miss a Follow-Up. Never Drop the Ball.
            </h1>
            <p className="mt-5 text-[#424754] max-w-lg">
              Every missed follow-up is a missed opportunity. Ascoyo's Activity &amp; Task module ensures your team stays on top of every commitment, from scheduled calls and demos to pending proposals and follow-up emails.
            </p>
            <p className="mt-4 text-[#424754] max-w-lg">
              Create tasks manually or let Ascoyo's AI agents generate them automatically from meetings, emails, and deal activity. Assign tasks to team members, set due dates, and get notified before anything goes overdue.
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <img
              src={activity}
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
              icon={Sparkles}
              title="Automated task creation from meetings and emails"
              description="Ascoyo listens to your meetings and emails and turns commitments into tasks automatically. Nothing gets promised and then forgotten."
            />
            <FeatureCard
              icon={Users2}
              title="Team task assignment and ownership tracking"
              description="Assign follow-ups to the right person the moment they are created. Everyone knows what they own and when it needs to be done."
            />
            <FeatureCard
              icon={Bell}
              title="Due date reminders and overdue alerts"
              description="Get notified before a task slips, not after. Ascoyo keeps your team accountable without anyone having to chase anyone down."
            />
            <FeatureCard
              icon={FileSpreadsheet}
              title="Activity logging for calls, emails and meetings"
              description="Every customer interaction is recorded and tied to the right deal or contact. A complete audit trail with zero extra effort from your reps."
            />
            <FeatureCard
              icon={BarChart3}
              title="Task completion analytics by rep and team"
              description="See who is keeping up with their pipeline activity and who is falling behind. Use the data to coach, not to micromanage."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <div className="card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink-900">
                Automate the Admin. <br />
                Focus on Selling
              </h2>
              <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                Ascoyo takes the mental load of task management off your reps. With AI-powered task automation, your team gets a prioritized to-do list every day so they always know exactly what needs to happen next to move a deal forward.
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50/40 border border-amber-100 p-4">
              <p className="text-sm font-semibold text-ink-700">🤖 Ascoyo</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-card border border-amber-100">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-brand-700 tracking-wider">AI · INCOMING EMAIL</p>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                      Approve All
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-ink-400" />
                    <span className="text-[11px] text-ink-700 font-semibold">Sarah Johnson</span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-2 bg-ink-100 rounded w-full" />
                    <div className="h-2 bg-ink-100 rounded w-4/5" />
                    <div className="h-2 bg-ink-100 rounded w-3/5" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-card border border-amber-100">
                  <p className="text-[10px] font-bold text-brand-700 tracking-wider">AI · AUTOMATED TASKS</p>
                  <p className="text-[10px] text-ink-400 mt-0.5">Generated by Ascoyo AI</p>
                  <ol className="mt-3 space-y-1.5 text-[11px] text-ink-700">
                    <li>1. Create Project Timeline</li>
                    <li>2. Schedule Kick-off Meeting</li>
                    <li>3. Assign Designers</li>
                  </ol>
                  <button className="mt-3 w-full text-[10px] py-1 rounded bg-brand-50 text-brand-700 font-semibold">
                    View Original
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
