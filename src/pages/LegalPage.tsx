type Props = { title: string; intro: string; sections: { h: string; p: string }[] };

export default function LegalPage({ title, intro, sections }: Props) {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl lg:text-5xl font-extrabold text-ink-900">{title}</h1>
        <p className="mt-5 text-ink-500">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold text-ink-900">{s.h}</h2>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
