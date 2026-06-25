const cards = [
  {
    title: "Responsive First",
    description: "Layouts adapt cleanly across mobile, tablet, and desktop screens.",
  },
  {
    title: "SEO Ready",
    description: "Semantic structure, clean headings, metadata, and readable content.",
  },
  {
    title: "Fast Delivery",
    description: "Built for hackathon speed without sacrificing UI polish.",
  },
];

function CardGrid() {
  return (
    <section id="showcase" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Showcase
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">
            Judge-visible frontend strengths
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-950">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGrid;