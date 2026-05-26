import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Building2,
  IdCard,
  Rocket,
  CheckSquare,
  Bot,
  BarChart3,
  Compass,
  Mic,
  HeartHandshake,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import Logo from '../ui/Logo';
import LoginModal from '../modals/LoginModal';
import SignupModal from '../modals/SignupModal';

const crmModules = [
  {
    icon: Building2,
    title: 'Account Management',
    desc: 'Centralize all account data and relationship history.',
    to: '/platform/account-management',
  },
  {
    icon: IdCard,
    title: 'Contact Management',
    desc: 'Keep track of every interaction with your key stakeholders.',
    to: '/platform/contact-management',
  },
  {
    icon: Rocket,
    title: 'Lead & Opportunity',
    desc: 'Manage your pipeline with precision from lead to close.',
    to: '/platform/lead-opportunity',
  },
  {
    icon: CheckSquare,
    title: 'Activity & Task',
    desc: 'Never miss a follow-up with automated task tracking.',
    to: '/platform/activity-task',
  },
];

const agents = [
  {
    icon: Bot,
    title: 'Account Intelligence Agent',
    desc: 'Surfaces deep insights about your accounts automatically.',
    to: '/agents?tab=account-intelligence',
  },
  {
    icon: BarChart3,
    title: 'Lead Scoring Agent',
    desc: 'Prioritize your best opportunities with AI-driven scoring.',
    to: '/agents?tab=lead-scoring',
  },
  {
    icon: Compass,
    title: 'Deal Coach Agent',
    desc: 'Get real-time guidance on how to move your deals forward.',
    to: '/agents?tab=deal-coach',
  },
  {
    icon: Mic,
    title: 'Meeting Intelligence Agent',
    desc: 'Transcribe and analyze every meeting for key action items.',
    to: '/agents?tab=meeting-intelligence',
  },
  {
    icon: HeartHandshake,
    title: 'Relationship Score',
    desc: 'Monitor the health of every stakeholder relationship at a glance.',
    to: '/agents?tab=relationship-score',
  },
];

export default function Navbar() {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setPlatformOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Click-outside for desktop dropdown
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setPlatformOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-brand-600' : 'text-ink-700 hover:text-ink-900'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-ink-100">
        <div className="container-x">
          <div className="h-16 flex items-center justify-between">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" ref={ref}>
              <div
                className="relative"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <Link
                  to="/platform"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/platform') || platformOpen
                      ? 'text-brand-600'
                      : 'text-ink-700 hover:text-ink-900'
                  }`}
                >
                  Platform
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${platformOpen ? 'rotate-180' : ''}`}
                  />
                </Link>
                {(location.pathname.startsWith('/platform') || platformOpen) && (
                  <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 h-0.5 w-8 bg-brand-600 rounded-full" />
                )}

                {platformOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] animate-fade-in">
                    <div className="card p-6 shadow-soft border-ink-100">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="eyebrow mb-4 text-ink-500">CRM Modules</p>
                        <div className="space-y-1">
                          {crmModules.map((m) => (
                            <Link
                              key={m.title}
                              to={m.to}
                              className="flex gap-3 p-2 -mx-2 rounded-lg hover:bg-lilac-50 transition-colors group"
                            >
                              <div className="h-9 w-9 shrink-0 rounded-lg bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                <m.icon className="h-4 w-4" strokeWidth={1.8} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-ink-900">{m.title}</p>
                                <p className="text-xs text-ink-500 leading-snug mt-0.5">{m.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="eyebrow mb-4 text-ink-500">AI Agents</p>
                        <div className="space-y-1">
                          {agents.map((m) => (
                            <Link
                              key={m.title}
                              to={m.to}
                              className="flex gap-3 p-2 -mx-2 rounded-lg hover:bg-lilac-50 transition-colors group"
                            >
                              <div className="h-9 w-9 shrink-0 rounded-lg bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                <m.icon className="h-4 w-4" strokeWidth={1.8} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-ink-900">{m.title}</p>
                                <p className="text-xs text-ink-500 leading-snug mt-0.5">{m.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/pricing" className={linkClass}>
                Pricing
              </NavLink>
              <NavLink to="/resources" className={linkClass}>
                Resources
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact Us
              </NavLink>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setLoginOpen(true)}
                className="text-sm font-medium text-ink-700 hover:text-ink-900"
              >
                Log in
              </button>
              <button onClick={() => setSignupOpen(true)} className="btn-primary">
                Start Free Trial
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 -mr-2 text-ink-700"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-ink-100 bg-white">
            <div className="container-x py-5 space-y-1">
              <div className="pb-2">
                <p className="eyebrow text-ink-500 px-2 pb-2">Platform</p>
                {crmModules.concat(agents as any).map((m) => (
                  <Link
                    key={m.title}
                    to={m.to}
                    className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-lilac-50"
                  >
                    <m.icon className="h-4 w-4 text-brand-600" />
                    <span className="text-sm font-medium text-ink-800">{m.title}</span>
                  </Link>
                ))}
              </div>
              <NavLink
                to="/pricing"
                className="block px-2 py-2 text-sm font-medium text-ink-800 hover:bg-lilac-50 rounded-lg"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/resources"
                className="block px-2 py-2 text-sm font-medium text-ink-800 hover:bg-lilac-50 rounded-lg"
              >
                Resources
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-2 py-2 text-sm font-medium text-ink-800 hover:bg-lilac-50 rounded-lg"
              >
                Contact Us
              </NavLink>
              <div className="pt-3 flex flex-col gap-2">
                <button
                  className="btn-secondary w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    setLoginOpen(true);
                  }}
                >
                  Log in
                </button>
                <button
                  className="btn-primary w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    setSignupOpen(true);
                  }}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToSignup={() => {
          setLoginOpen(false);
          setSignupOpen(true);
        }}
      />
      <SignupModal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSwitchToLogin={() => {
          setSignupOpen(false);
          setLoginOpen(true);
        }}
      />
    </>
  );
}
