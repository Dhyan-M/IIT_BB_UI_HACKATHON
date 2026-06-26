import { memo } from "react";
import { workflowSteps } from "../data/features";

function WorkflowStrip() {
  return (
    <section id="intelligence" className="section-shell py-20 md:py-28" aria-labelledby="workflow-title">
      <div className="premium-card scan-line rounded p-6 md:p-8">
        <div className="mb-8 max-w-2xl">
          <p className="font-tech mb-3 text-xs uppercase tracking-[0.24em] text-[var(--forsythia)]">
            Automation loop
          </p>
          <h2 id="workflow-title" className="text-3xl font-semibold text-white sm:text-4xl">
            From raw signal to governed action.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <article key={step.label} className="hover-lift rounded border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded border border-white/10 bg-black/20">
                <img className="asset-icon-hot h-6 w-6" src={step.icon} alt="" aria-hidden="true" />
              </div>
              <p className="font-tech text-xs uppercase tracking-[0.18em] text-[var(--deep-saffron)]">
                0{index + 1} / {step.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(WorkflowStrip);