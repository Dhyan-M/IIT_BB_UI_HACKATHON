import { memo, useRef } from "react";

const services = ["AI Strategy", "Custom Agents", "Process Automation", "Data Intelligence"];

const pipeline = [
  { label: "Ingest", icon: "/assets/frontend-battle-phase-1/SVGs/cube-16-solid.svg" },
  { label: "Reason", icon: "/assets/frontend-battle-phase-1/SVGs/cog-8-tooth.svg" },
  { label: "Automate", icon: "/assets/frontend-battle-phase-1/SVGs/arrow-trending-up.svg" },
  { label: "Monitor", icon: "/assets/frontend-battle-phase-1/SVGs/chart-pie.svg" },
];

function Hero() {
  const heroRef = useRef(null);
  const consoleRef = useRef(null);

  const moveSpotlight = (event) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty("--spotlight-x", `${x}%`);
    hero.style.setProperty("--spotlight-y", `${y}%`);

    const consolePanel = consoleRef.current;
    if (consolePanel) {
      const consoleRect = consolePanel.getBoundingClientRect();
      const consoleX = ((event.clientX - consoleRect.left) / consoleRect.width) * 100;
      const consoleY = ((event.clientY - consoleRect.top) / consoleRect.height) * 100;
      consolePanel.style.setProperty("--console-x", `${consoleX}%`);
      consolePanel.style.setProperty("--console-y", `${consoleY}%`);
    }
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={moveSpotlight}
      className="hero-spotlight relative isolate min-h-screen overflow-hidden pt-28"
    >
      <div className="hero-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="noise-layer absolute inset-0 -z-10" aria-hidden="true" />
      <div className="animate-orb absolute left-[58%] top-24 -z-10 h-80 w-80 rounded-full bg-[var(--nocturnal-expedition)]/60 blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-[var(--deep-saffron)]/10 blur-3xl" />

      <div className="section-shell animate-rise-in grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-5xl">
          <p className="font-tech mb-5 text-xs uppercase tracking-[0.28em] text-[var(--forsythia)]">
            Advanced AI-driven data automation
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Command every data workflow with agentic precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Armory AI converts fragmented operational data into governed agents that ingest,
            reason, automate, and monitor the workflows that move revenue.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="shine-button hover-lift rounded bg-[var(--forsythia)] px-6 py-3 text-center font-semibold text-[#071114] hover:bg-[var(--deep-saffron)]"
            >
              Launch Automation
            </a>
            <a
              href="#platform"
              className="hover-lift rounded border border-white/15 px-6 py-3 text-center font-semibold text-white hover:border-white/35 hover:bg-white/10"
            >
              Explore Command Layer
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="Armory AI service areas">
            {services.map((service) => (
              <article key={service} className="premium-card hover-lift rounded p-4">
                <p className="font-tech text-xs uppercase tracking-[0.18em] text-[var(--mystic-mint)]">
                  {service}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside
          ref={consoleRef}
          className="command-console premium-card scan-line relative rounded p-4 md:p-5"
          aria-label="Armory AI live command console preview"
        >
          <div className="relative z-10">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-tech text-xs uppercase tracking-[0.22em] text-[var(--forsythia)]">
                  Live command console
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">Workflow intelligence online</p>
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--deep-saffron)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--forsythia)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--mystic-mint)]" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
  ["Pricing matrix", "3-region"],
  ["State guard", "Isolated"],
  ["Workflow loop", "4-step"],
              ].map(([label, value]) => (
                <div key={label} className="rounded border border-white/10 bg-black/20 p-3">
                  <p className="font-tech text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
                  <p className="font-tech mt-2 text-lg font-bold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded border border-white/10 bg-black/25 p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="font-tech text-xs uppercase tracking-[0.18em] text-[var(--mystic-mint)]">
                  Pipeline
                </p>
                <span className="rounded bg-[var(--forsythia)]/15 px-2.5 py-1 text-xs font-semibold text-[var(--forsythia)]">
                  Synced
                </span>
              </div>

              <div className="grid gap-3">
                {pipeline.map((step, index) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded border border-white/10 bg-white/[0.06]">
                      <img className="asset-icon-hot h-4 w-4" src={step.icon} alt="" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <p className="font-tech text-xs uppercase tracking-[0.16em] text-white">{step.label}</p>
                        <span className="font-tech text-[10px] text-[var(--muted)]">0{index + 1}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="meter-fill h-full rounded-full bg-gradient-to-r from-[var(--forsythia)] to-[var(--deep-saffron)]"
                          style={{ width: `${68 + index * 8}%`, animationDelay: `${index * 70}ms` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded border border-[var(--forsythia)]/20 bg-[var(--forsythia)]/10 p-4">
              <p className="font-tech text-xs uppercase tracking-[0.18em] text-[var(--forsythia)]">
                Agent directive
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--mystic-mint)]">
                Detect high-value exceptions, route approvals, update CRM, and monitor revenue impact.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default memo(Hero);