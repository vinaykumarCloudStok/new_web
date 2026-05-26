import Modal from './Modal';
import { AlertTriangle } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
  onRetry?: () => void;
  title?: string;
  description?: string;
};

export default function ErrorModal({
  open,
  onClose,
  onRetry,
  title = 'Something went wrong',
  description = 'We were unable to process your request at this time. This is likely a temporary connection issue.',
}: Props) {
  return (
    <Modal open={open} onClose={onClose} size="sm" showClose={false}>
      <div className="p-8 sm:p-10 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-orange-50 grid place-items-center">
          <AlertTriangle className="h-7 w-7 text-orange-500" />
        </div>
        <p className="mt-5 text-xs font-bold tracking-[0.18em] uppercase text-orange-500">
          Submission Failed
        </p>
        <h3 className="font-display text-2xl font-bold text-ink-900 mt-2">{title}</h3>
        <p className="text-sm text-ink-500 mt-2 leading-relaxed">{description}</p>

        <button
          onClick={onRetry || onClose}
          className="btn-primary w-full mt-6"
        >
          Try Again
        </button>
      </div>
    </Modal>
  );
}
