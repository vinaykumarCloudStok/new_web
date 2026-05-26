import Modal from './Modal';
import { Check, BadgeCheck } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
  variant?: 'green' | 'blue';
  emailNote?: string;
};

export default function SuccessModal({
  open,
  onClose,
  eyebrow = 'EARLY BIRD ACCESS CONFIRMED',
  title = 'Thanks for reaching out',
  description = 'Someone from our team will be in touch with you shortly',
  ctaLabel = 'Back to Website',
  onCta,
  variant = 'green',
  emailNote,
}: Props) {
  const isBlue = variant === 'blue';

  return (
    <Modal open={open} onClose={onClose} size="sm" showClose={false}>
      <div className="p-8 sm:p-10 text-center">
        <div
          className={`mx-auto h-16 w-16 rounded-full grid place-items-center ${
            isBlue ? 'bg-brand-50' : 'bg-mint-500/10'
          }`}
        >
          <div
            className={`h-12 w-12 rounded-full grid place-items-center ${
              isBlue ? 'bg-brand-600' : 'bg-mint-500'
            }`}
          >
            {isBlue ? (
              <BadgeCheck className="h-6 w-6 text-white" strokeWidth={2.2} />
            ) : (
              <Check className="h-6 w-6 text-white" strokeWidth={3} />
            )}
          </div>
        </div>

        <p
          className={`mt-5 text-xs font-bold tracking-[0.18em] uppercase ${
            isBlue ? 'text-brand-600' : 'text-mint-600'
          }`}
        >
          {eyebrow}
        </p>
        <h3 className="font-display text-2xl font-bold text-ink-900 mt-2">{title}</h3>
        <p className="text-sm text-ink-500 mt-2 leading-relaxed">{description}</p>

        {emailNote && (
          <div className="mt-5 p-3 bg-lilac-50 rounded-xl text-left flex items-start gap-3">
            <div className="h-7 w-7 shrink-0 rounded-full bg-brand-600 grid place-items-center">
              <BadgeCheck className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-ink-700">Confirmation Email</p>
              <p className="text-xs text-ink-600 mt-0.5">{emailNote}</p>
            </div>
          </div>
        )}

        <button
          onClick={onCta || onClose}
          className="btn-primary w-full mt-6"
        >
          {ctaLabel}
        </button>

        <p className="text-xs text-ink-500 mt-4">Need help? Contact our team</p>
      </div>
    </Modal>
  );
}
