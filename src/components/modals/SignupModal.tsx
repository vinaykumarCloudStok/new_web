import { useState } from 'react';
import Modal from './Modal';
import Logo from '../ui/Logo';
import { ChevronDown } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
};

export default function SignupModal({ open, onClose, onSwitchToLogin }: Props) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '1-10 employees',
  });

  return (
    <Modal open={open} onClose={onClose} size="md">
      <div className="p-8 sm:p-10">
        <div className="flex justify-center">
          <Logo />
        </div>

        <h2 className="font-display text-2xl font-bold text-center text-ink-900 mt-6">
          Create Your Free Workspace
        </h2>
        <p className="text-sm text-center text-ink-500 mt-1.5">
          Start your 14-day free trial in minutes.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full Name">
            <input
              className="input"
              placeholder="Alex Rivera"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
          </Field>
          <Field label="Work Email">
            <input
              className="input"
              placeholder="alex@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Field>
          <Field label="Company Name">
            <input
              className="input"
              placeholder="Acme Inc."
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </Field>
          <Field label="Team Size">
            <div className="relative">
              <select
                value={form.teamSize}
                onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                className="input appearance-none pr-9"
              >
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>200+ employees</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
            </div>
          </Field>
        </div>

        <button className="btn-primary w-full mt-6">Start Free Trial</button>

        <p className="text-center text-xs text-ink-500 mt-4">
          14-day free trial · No credit card required
        </p>
        <p className="text-center text-sm text-ink-500 mt-2">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="font-semibold text-brand-600 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </Modal>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold text-brand-600 mb-1.5 block">{label}</label>
      {children}
    </div>
  );
}
