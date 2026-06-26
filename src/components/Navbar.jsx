import { memo } from "react";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071114]/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-[var(--arctic-powder)]">
          <span className="grid h-9 w-9 place-items-center rounded bg-[var(--forsythia)] text-[#071114]">AI</span>
          <span>Armory AI</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          <a className="transition-fast hover:text-white" href="#platform">Platform</a>
          <a className="transition-fast hover:text-white" href="#intelligence">Intelligence</a>
          <a className="transition-fast hover:text-white" href="#pricing">Pricing</a>
          <a className="transition-fast hover:text-white" href="#proof">Proof</a>
        </div>

        <a
          href="#pricing"
          className="transition-fast rounded border border-[var(--forsythia)]/70 px-4 py-2 text-sm font-semibold text-[var(--forsythia)] hover:bg-[var(--forsythia)] hover:text-[#071114]"
        >
          Build A Workflow
        </a>
      </nav>
    </header>
  );
}

export default memo(Navbar);