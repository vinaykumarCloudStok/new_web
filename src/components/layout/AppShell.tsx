import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Bell, Command, Search, Settings } from 'lucide-react';
import Logo from '../ui/Logo';
import Footer from './Footer';

const appNav = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Agents', to: '/agents' },
  { label: 'Pipeline', to: '/pipeline' },
  { label: 'Insights', to: '/insights' },
];

export default function AppShell() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-lilac-50/40">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-ink-100">
        <div className="container-x">
          <div className="h-16 flex items-center justify-between gap-6">
            <div className="flex items-center gap-10">
              <Logo />
              <nav className="hidden md:flex items-center gap-7">
                {appNav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-ink-900'
                          : 'text-ink-500 hover:text-ink-800'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-[22px] left-0 right-0 h-0.5 bg-ink-900 rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-lilac-50 border border-ink-100 text-sm text-ink-500 w-64">
                <Search className="h-3.5 w-3.5" />
                <span>Quick search...</span>
              </div>
              <button className="h-9 w-9 grid place-items-center rounded-lg text-ink-600 hover:bg-lilac-50 hover:text-ink-900 transition-colors" aria-label="Notifications">
                <Bell className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 grid place-items-center rounded-lg text-ink-600 hover:bg-lilac-50 hover:text-ink-900 transition-colors" aria-label="Command">
                <Command className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 grid place-items-center rounded-lg text-ink-600 hover:bg-lilac-50 hover:text-ink-900 transition-colors" aria-label="Settings">
                <Settings className="h-4 w-4" />
              </button>
              <button className="ml-1 px-4 py-2 rounded-xl bg-ink-950 text-white text-sm font-semibold hover:bg-ink-900 transition-colors">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button className="h-9 w-9 grid place-items-center rounded-lg text-ink-600">
                <Bell className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile nav strip */}
          <div className="md:hidden flex items-center gap-5 overflow-x-auto pb-3 -mt-1">
            {appNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive ? 'text-ink-900 underline underline-offset-8 decoration-2' : 'text-ink-500'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
