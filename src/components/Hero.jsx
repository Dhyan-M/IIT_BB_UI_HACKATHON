function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-6 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <img
  src="/assets/test-image.png"
  alt="Test asset"
  className="mx-auto mb-8 h-24 w-24 rounded-2xl object-cover shadow-lg"
/>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          Frontend Battle 3.0
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 md:text-7xl">
          Build Fast. Look Sharp. Ship Clean.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          A responsive, SEO-ready frontend boilerplate built for high-pressure hackathon execution.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#features"
            className="rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Explore Features
          </a>

          <a
            href="#showcase"
            className="rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 transition hover:border-slate-500"
          >
            View Showcase
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;