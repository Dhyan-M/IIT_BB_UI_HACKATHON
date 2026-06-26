import { memo } from "react";
import { proofStats } from "../data/features";

function SocialProof() {
  return (
    <section id="proof" className="section-shell py-20 md:py-28" aria-labelledby="proof-title">
      <div className="mb-10 max-w-2xl">
        <p className="font-tech mb-3 text-xs uppercase text-[var(--forsythia)]">Proof of command</p>
        <h2 id="proof-title" className="text-3xl font-semibold text-white sm:text-4xl">
          Built for teams that measure automation by outcomes.
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {proofStats.map((stat) => (
          <article key={stat.value} className="glass-panel rounded p-6">
            <p className="font-tech text-4xl font-bold text-[var(--forsythia)]">{stat.value}</p>
            <h3 className="mt-4 text-lg font-semibold text-white">{stat.label}</h3>
          </article>
        ))}
      </div>

      <article className="glass-panel mt-4 rounded p-6 md:p-8">
  <p className="max-w-3xl text-xl leading-8 text-white">
    “The strongest automation systems do not just move data. They preserve context,
    explain decisions, and keep operators in control.”
  </p>
  <p className="font-tech mt-5 text-xs uppercase text-[var(--mystic-mint)]">
    Armory AI operating principle
  </p>
</article>
    </section>
  );
}

export default memo(SocialProof);