import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <Logo variant="light" />
            <p className="text-xs text-ink-300 mt-2">
              © 2024 Ascoyo Intelligence. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-200">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link to="/api" className="hover:text-white transition-colors">
              API Documentation
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
