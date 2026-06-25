function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900">
          ProjectGotham
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="hover:text-slate-950">Features</a>
          <a href="#showcase" className="hover:text-slate-950">Showcase</a>
          <a href="#faq" className="hover:text-slate-950">FAQ</a>
        </div>

        <a
          href="#cta"
          className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Navbar;