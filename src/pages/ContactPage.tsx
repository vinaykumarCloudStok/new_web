import { useState } from 'react';
import { Monitor, Headphones, Building2, MessageSquareWarning, Handshake, BadgeDollarSign, ChevronDown } from 'lucide-react';
import SuccessModal from '../components/modals/SuccessModal';
import ErrorModal from '../components/modals/ErrorModal';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '1-10',
    inquiry: 'Sales',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function submit() {
    if (!form.name || !form.email || !form.message) {
      setError(true);
      return;
    }
    setSuccess(true);
  }

  return (
    <>
      <section className="bg-grad-hero">
        <div className="container-x py-16 lg:py-20 text-center">
          <p className="eyebrow">Contact us</p>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl font-extrabold text-ink-900">
            Let's talk
          </h1>
          <p className="mt-5 text-ink-500 max-w-2xl mx-auto">
            Whether you're exploring Ascoyo for the first time, ready to upgrade, or need support with your account, our team is here. Reach out and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-x">
          <div className="card overflow-hidden grid lg:grid-cols-[36%_64%]">
            <div className="bg-lilac-50 p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-ink-900">
                Tell us how we can help
              </h3>
              <p className="mt-4 text-sm text-ink-500">
                Whether you need product guidance, AI workflow support, or enterprise CRM solutions,
                our team is ready to assist.
              </p>
              <ul className="mt-7 space-y-4">
                <Item icon={Monitor} text="Product Demos" />
                <Item icon={Headphones} text="Customer Support" />
                <Item icon={Building2} text="Enterprise Solutions" />
              </ul>
            </div>

            <div className="p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-ink-900">Send us a message</h3>
              <p className="text-sm text-ink-500 mt-1">Our team will get back to you shortly.</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name*">
                  <input className="input" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </Field>
                <Field label="Work Email*">
                  <input className="input" placeholder="john@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Field>
                <Field label="Company Name*">
                  <input className="input" placeholder="Acme Inc" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </Field>
                <Field label="Team Size">
                  <Select value={form.teamSize} onChange={(v) => setForm({ ...form, teamSize: v })} options={['1-10', '11-50', '51-200', '200+']} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Inquiry Type">
                    <Select value={form.inquiry} onChange={(v) => setForm({ ...form, inquiry: v })} options={['Sales', 'Support', 'Partnership', 'Enterprise']} />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Message*">
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="input resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </Field>
                </div>
              </div>

              <button onClick={submit} className="btn-primary w-full mt-6">
                Send Message
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <Chip icon={BadgeDollarSign} label="Sales Inquiries" />
            <Chip icon={MessageSquareWarning} label="Product Support" />
            <Chip icon={Handshake} label="Partnerships" />
            <Chip icon={Building2} label="Enterprise Assistance" />
          </div>
        </div>
      </section>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
        eyebrow="MESSAGE SENT SUCCESSFULLY"
        title="Thanks for reaching out"
        description="Someone from our team will be in touch with you shortly"
      />
      <ErrorModal open={error} onClose={() => setError(false)} onRetry={() => setError(false)} />
    </>
  );
}

function Item({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <li className="flex items-center gap-3 text-ink-800">
      <span className="h-9 w-9 rounded-xl bg-white border border-ink-100 grid place-items-center text-brand-600">
        <Icon className="h-4 w-4" />
      </span>
      <span className="font-medium">{text}</span>
    </li>
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
      <select value={value} onChange={(e) => onChange(e.target.value)} className="input appearance-none pr-9">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
    </div>
  );
}

function Chip({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-100 text-xs font-semibold text-ink-700">
      <Icon className="h-3.5 w-3.5 text-brand-600" /> {label}
    </span>
  );
}
