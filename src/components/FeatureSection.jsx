const features = [
  {
    title: "Mobile-first layout",
    description:
      "Every section is structured to work cleanly on small screens before scaling up to desktop.",
  },
  {
    title: "Reusable components",
    description:
      "Navbar, hero, cards, feature blocks, and footer are separated for fast hackathon editing.",
  },
  {
    title: "SEO-friendly structure",
    description:
      "Sections use clear headings, readable content, and semantic layout for better scoring.",
  },
  {
    title: "Fast visual polish",
    description:
      "Spacing, typography, contrast, and hover states are pre-tuned so the UI looks complete quickly.",
  },
];

function FeatureSection() {
  return (
    <section id="features" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Built for a 4-hour frontend battlefield.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            This boilerplate gives you a clean base that can be quickly adapted
            to whatever asset ZIP and problem statement the judges release.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;