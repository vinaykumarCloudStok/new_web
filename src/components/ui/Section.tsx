import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'lilac' | 'ink' | 'gradient';
};

export default function Section({ children, className = '', id, bg = 'white' }: Props) {
  const bgClass =
    bg === 'lilac'
      ? 'bg-lilac-50'
      : bg === 'ink'
      ? 'bg-ink-950 text-white'
      : bg === 'gradient'
      ? 'bg-gradient-to-b from-white via-lilac-50 to-white'
      : 'bg-white';
  return (
    <section id={id} className={`relative ${bgClass} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
