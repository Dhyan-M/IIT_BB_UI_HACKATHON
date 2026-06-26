import { useEffect, useRef, useState } from "react";
import { featureCards } from "../data/features";

function BentoAccordion() {
  const [isMobile, setIsMobile] = useState(() =>
  typeof window !== "undefined"
    ? window.matchMedia("(max-width: 767px)").matches
    : false
);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const syncMode = (event) => {
      const nextIsMobile = event.matches;
      setIsMobile(nextIsMobile);
      if (nextIsMobile) {
        setOpenIndex(activeIndexRef.current);
      }
    };

    syncMode(media);
    media.addEventListener("change", syncMode);

    return () => media.removeEventListener("change", syncMode);
  }, []);

  const activate = (index) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  return (
    <section id="platform" className="section-shell py-20 md:py-28" aria-labelledby="platform-title">
      <div className="mb-10 max-w-2xl">
        <p className="font-tech mb-3 text-xs uppercase tracking-[0.24em] text-[var(--forsythia)]">
          Platform architecture
        </p>
        <h2 id="platform-title" className="text-3xl font-semibold text-white sm:text-4xl">
          One command layer for intelligent operations.
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          The same automation intelligence adapts from executive dashboards to operator workflows.
        </p>
      </div>

      {!isMobile ? (
        <div className="grid grid-cols-6 gap-4">
          {featureCards.map((feature, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={feature.title}
                tabIndex={0}
                onMouseEnter={() => activate(index)}
                onFocus={() => activate(index)}
                onClick={() => activate(index)}
                className={`transition-structure premium-card rounded p-5 outline-none ${
                  isActive
                    ? "col-span-6 min-h-72 scale-[1.015] border-[var(--forsythia)]/80 shadow-[0_0_0_1px_rgba(255,200,1,0.35),0_30px_110px_rgba(255,153,50,0.16)] md:col-span-3"
                    : "col-span-6 min-h-56 hover:-translate-y-1 hover:border-white/25 md:col-span-3 lg:col-span-2"
                }`}
              >
                <div className="mb-6 grid h-11 w-11 place-items-center rounded border border-white/10 bg-white/[0.06]">
                  <img className="asset-icon h-6 w-6" src={feature.icon} alt="" aria-hidden="true" />
                </div>
                <p className="font-tech mb-3 text-xs uppercase tracking-[0.18em] text-[var(--deep-saffron)]">
                  {feature.eyebrow}
                </p>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{feature.summary}</p>
                <p className={`mt-5 text-sm leading-6 text-[var(--mystic-mint)] ${isActive ? "block" : "hidden"}`}>
                  {feature.details}
                </p>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {featureCards.map((feature, index) => {
            const isOpen = index === openIndex;

            return (
              <article key={feature.title} className="premium-card rounded">
                <button
                  type="button"
                  onClick={() => {
                    activate(index);
                    setOpenIndex(isOpen ? -1 : index);
                  }}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className="font-tech block text-xs uppercase tracking-[0.18em] text-[var(--deep-saffron)]">
                      {feature.eyebrow}
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-white">{feature.title}</span>
                  </span>
                  <img
                    className={`asset-icon h-5 w-5 transition-structure ${isOpen ? "rotate-180" : ""}`}
                    src="/assets/frontend-battle-phase-1/SVGs/chevron-down.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
                <div className={`transition-structure grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-[var(--muted)]">{feature.summary}</p>
                    <p className="px-5 pb-6 text-sm leading-6 text-[var(--mystic-mint)]">{feature.details}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default BentoAccordion;