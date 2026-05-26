import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x text-center max-w-xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold text-ink-900">
          This page wandered off the pipeline.
        </h1>
        <p className="mt-4 text-ink-500">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary mt-7 inline-flex">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
