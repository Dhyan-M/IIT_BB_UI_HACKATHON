function Footer() {
  return (
    <footer id="cta" className="bg-white px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950">
            ProjectGotham
          </h2>
          <p className="mt-2 text-slate-600">
            React + Vite + Tailwind boilerplate for Frontend Battle 3.0.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
          <a href="#features" className="hover:text-slate-950">
            Features
          </a>
          <a href="#showcase" className="hover:text-slate-950">
            Showcase
          </a>
          <a href="#faq" className="hover:text-slate-950">
            FAQ
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl text-sm text-slate-500">
        © 2026 ProjectGotham. Built for fast, responsive, SEO-ready frontend execution.
      </div>
    </footer>
  );
}

export default Footer;