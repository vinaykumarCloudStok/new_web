import { useState } from 'react';
import Modal from './Modal';
import Logo from '../ui/Logo';
import { Target, Sparkles, TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
};

export default function LoginModal({ open, onClose, onSwitchToSignup }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Modal open={open} onClose={onClose} size="lg">
      <div className="grid md:grid-cols-2">
        {/* Left visual panel */}
        <div className="hidden md:block relative bg-gradient-to-br from-brand-50 via-lilac-50 to-white p-8 rounded-l-2xl">
          <h3 className="font-display text-2xl font-bold text-ink-900 leading-tight">
            Welcome back to <br /> your intelligence layer
          </h3>
          <p className="text-sm text-ink-500 mt-3">
            Pick up right where your agents left off.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <Bullet icon={Target} label="Capture &amp; manage leads" />
            <Bullet icon={Sparkles} label="Automate workflows" />
            <Bullet icon={TrendingUp} label="Track performance" />
            <Bullet icon={ShieldCheck} label="Enterprise-grade security" />
          </ul>

          {/* Decorative chart card */}
          <div className="mt-10 relative">
            <div className="absolute -top-3 -right-3 h-9 w-9 rounded-xl bg-brand-600 grid place-items-center shadow-soft">
              <BarChart3 className="h-4 w-4 text-white" />
            </div>
            <div className="bg-white rounded-2xl shadow-card p-5 border border-ink-100">
              <p className="text-xs font-semibold text-ink-700">Pipeline Velocity</p>
              <div className="mt-4 flex items-end gap-1.5 h-20">
                {[35, 55, 85, 50, 92, 70, 96].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-sm ${
                      i === 6 ? 'bg-brand-600' : i % 2 ? 'bg-brand-300' : 'bg-brand-100'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-mint-500" />
                <span className="text-[11px] text-ink-500">+18% this week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="p-8 sm:p-10">
          <div className="md:hidden mb-6">
            <Logo />
          </div>
          <div className="hidden md:flex justify-center">
            <Logo />
          </div>

          <h2 className="font-display text-2xl font-bold text-ink-900 text-center mt-6 md:mt-8">
            Sign in to your workspace
          </h2>
          <p className="text-sm text-ink-500 text-center mt-1.5">
            Continue where your agents left off.
          </p>

          <div className="mt-7 space-y-4">
            <div>
              <label className="label">Work Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="input"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="label !mb-0">Password</label>
                <a href="#" className="text-xs font-medium text-brand-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input"
              />
            </div>

            <button className="btn-primary w-full mt-2">Sign In</button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-ink-100" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-xs text-ink-400">OR</span>
              </div>
            </div>

            <button className="btn-secondary w-full">
              <GoogleIcon /> Continue with Google
            </button>

            <p className="text-center text-sm text-ink-500 pt-2">
              Don't have an account?{' '}
              <button
                onClick={onSwitchToSignup}
                className="font-semibold text-brand-600 hover:underline"
              >
                Start free trial
              </button>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function Bullet({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <li className="flex items-center gap-3 text-ink-800">
      <span className="h-7 w-7 rounded-lg bg-brand-100 text-brand-600 grid place-items-center">
        <Icon className="h-3.5 w-3.5" />
      </span>
      {label}
    </li>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.45.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.47 1.18 4.95l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
        fill="#EA4335"
      />
    </svg>
  );
}
