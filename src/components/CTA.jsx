import { memo } from "react";

function CTA() {
  return (
    <section className="section-shell py-20 md:py-28" aria-labelledby="cta-title">
      <div className="premium-card scan-line relative overflow-hidden rounded border-[var(--forsythia)]/35 p-8 md:p-12">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,200,1,0.18),transparent_24rem)]" />
        <div className="absolute bottom-0 right-0 z-0 h-56 w-56 translate-x-1/4 translate-y-1/4 rounded-full bg-[var(--deep-saffron)]/15 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <p className="font-tech mb-3 text-xs uppercase tracking-[0.24em] text-[var(--forsythia)]">
            Deploy the command layer
          </p>

          <h2 id="cta-title" className="text-3xl font-semibold text-white sm:text-5xl">
            Turn your highest-friction data process into an AI workflow.
          </h2>

          <p className="mt-5 text-[var(--muted)]">
            Start with one workflow, prove the lift, then scale automation across the operation.
          </p>

          <a
            href="#pricing"
            className="shine-button hover-lift mt-8 inline-block rounded bg-[var(--forsythia)] px-6 py-3 font-semibold text-[#071114] hover:bg-[var(--deep-saffron)]"
          >
            Build A Workflow
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(CTA);