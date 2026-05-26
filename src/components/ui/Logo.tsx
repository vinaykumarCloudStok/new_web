import { Link } from 'react-router-dom';

type Props = {
  variant?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ variant = 'dark', className = '' }: Props) {
  const text = variant === 'light' ? 'text-white' : 'text-ink-900';
  const stroke = variant === 'light' ? '#ffffff' : '#0b1224';
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path
          d="M16 4 L28 28 L22 28 L19.2 22 L12.8 22 L10 28 L4 28 Z M14.2 17.5 L17.8 17.5 L16 12.5 Z"
          fill={stroke}
        />
      </svg>
      <span className={`font-display text-xl font-bold tracking-tight ${text}`}>
        Ascoyo
      </span>
    </Link>
  );
}
