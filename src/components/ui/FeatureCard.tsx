import { type LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="card p-6 sm:p-7 hover:border-ink-200 hover:shadow-soft transition-all duration-300 group">
      <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink-900 leading-snug">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{description}</p>
    </div>
  );
}
