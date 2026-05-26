import { useState } from 'react';
import { Zap, Trophy, LifeBuoy, Map, Check, ChevronDown } from 'lucide-react';
import SuccessModal from '../components/modals/SuccessModal';
import ErrorModal from '../components/modals/ErrorModal';

export default function PricingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '1-10',
    source: 'LinkedIn',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function submit() {
    // Simulated submission: bad email triggers error
    if (!form.name || !form.email) {
      setError(true);
      return;
    }
    setSuccess(true);
  }

  return (
    <>
      <section className="bg-grad-hero">
        <div className="container-x py-16 lg:py-20 text-center">
          <p className="eyebrow">Early Bird Access</p>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
            Register for <span className="text-brand-600">Early Bird</span> Access
          </h1>
          <p className="mt-5 text-ink-500 max-w-xl mx-auto">
            Be among the first to experience Ascoyo. Early bird members get priority access, locked-in founding member pricing, and a direct line to our product team.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Tag icon={Zap} label="Priority Access" />
            <Tag icon={Trophy} label="Founding Member Pricing" />
            <Tag icon={LifeBuoy} label="Dedicated Support" />
            <Tag icon={Map} label="Roadmap Access" />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="card overflow-hidden grid lg:grid-cols-[36%_64%]">
            <div className="bg-gradient-to-br from-lilac-50 to-brand-50 p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-ink-900">Early Bird Benefits</h3>
              <ul className="mt-7 space-y-4 text-sm">
                {[
                  'Priority access before general availability',
                  'Founding member pricing locked in for life',
                  'Exclusive onboarding support from our team',
                  'Direct input into the product roadmap',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink-800">
                    <span className="h-5 w-5 shrink-0 rounded-full bg-brand-600 grid place-items-center mt-0.5">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 lg:p-10">
              <h3 className="font-display text-xl font-bold text-ink-900 text-center">
                Claim Your Early Bird Spot
              </h3>
              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name*">
                  <input
                    className="input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </Field>
                <Field label="Work Email*">
                  <input
                    className="input"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </Field>
                <Field label="Company Name*">
                  <input
                    className="input"
                    placeholder="Acme Inc"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </Field>
                <Field label="Team Size">
                  <Select
                    value={form.teamSize}
                    onChange={(v) => setForm({ ...form, teamSize: v })}
                    options={['1-10', '11-50', '51-200', '200+']}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="How did you hear about us?">
                    <Select
                      value={form.source}
                      onChange={(v) => setForm({ ...form, source: v })}
                      options={['LinkedIn', 'Twitter', 'Friend', 'Search', 'Other']}
                    />
                  </Field>
                </div>
              </div>

              <button onClick={submit} className="btn-primary w-full mt-6">
                Reserve My Spot
              </button>
            </div>
          </div>
        </div>
      </section>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
        variant="blue"
        eyebrow="EARLY BIRD ACCESS CONFIRMED"
        title="You are on the list."
        description="We will be in touch with your early access details very soon. Keep an eye on your inbox."
        emailNote="You in. Welcome to the Ascoyo early bird list."
        ctaLabel="Back to Website"
      />
      <ErrorModal
        open={error}
        onClose={() => setError(false)}
        onRetry={() => setError(false)}
      />
    </>
  );
}

function Tag({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold border border-brand-100">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input appearance-none pr-9"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
    </div>
  );
}
