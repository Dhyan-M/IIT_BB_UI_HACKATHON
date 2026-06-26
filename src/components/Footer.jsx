import { memo } from "react";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-semibold text-white">Armory AI</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Advanced AI data automation for operational teams.
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-[var(--muted)]" aria-label="Footer navigation">
          <a className="transition-fast hover:text-white" href="#platform">Platform</a>
          <a className="transition-fast hover:text-white" href="#intelligence">Intelligence</a>
          <a className="transition-fast hover:text-white" href="#pricing">Pricing</a>
          <a className="transition-fast hover:text-white" href="#proof">Proof</a>
        </nav>
      </div>
    </footer>
  );
}

export default memo(Footer);