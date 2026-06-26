import { useEffect, useRef } from "react";
import { calculateTierPrice, pricingConfig } from "../data/pricingConfig";

function PricingMatrix() {
  const billingRef = useRef("monthly");
  const currencyRef = useRef("INR");
  const priceRefs = useRef({});
  const suffixRefs = useRef({});
  const billingButtonRefs = useRef({});
  const currencyButtonRefs = useRef({});

  const setActiveButton = (buttonMap, activeKey) => {
    Object.entries(buttonMap.current).forEach(([key, button]) => {
      if (!button) return;
      const isActive = key === activeKey;
      button.dataset.active = String(isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const updatePriceNodes = () => {
    const billingKey = billingRef.current;
    const currencyKey = currencyRef.current;
    const currency = pricingConfig.currencies[currencyKey];
    const billing = pricingConfig.billing[billingKey];

    pricingConfig.tiers.forEach((tier) => {
      const priceNode = priceRefs.current[tier.id];
      const suffixNode = suffixRefs.current[tier.id];

      if (priceNode) {
        priceNode.textContent = `${currency.symbol}${calculateTierPrice(tier, billingKey, currencyKey)}`;
      }

      if (suffixNode) {
        suffixNode.textContent = billing.suffix;
      }
    });

    setActiveButton(billingButtonRefs, billingKey);
    setActiveButton(currencyButtonRefs, currencyKey);
  };

  useEffect(() => {
    updatePriceNodes();
  }, []);

  const handleBilling = (billingKey) => {
    billingRef.current = billingKey;
    updatePriceNodes();
  };

  const handleCurrency = (currencyKey) => {
    currencyRef.current = currencyKey;
    updatePriceNodes();
  };

  return (
    <section id="pricing" className="section-shell py-20 md:py-28" aria-labelledby="pricing-title">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="font-tech mb-3 text-xs uppercase tracking-[0.24em] text-[var(--forsythia)]">
            Matrix pricing
          </p>
          <h2 id="pricing-title" className="text-3xl font-semibold text-white sm:text-4xl">
            Pricing that adapts by billing cycle and region.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Rates are calculated from base tier value, regional tariff, currency conversion, and annual discount.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex rounded border border-white/10 bg-white/5 p-1" aria-label="Billing period">
            {Object.entries(pricingConfig.billing).map(([key, item]) => (
              <button
                key={key}
                ref={(node) => {
                  billingButtonRefs.current[key] = node;
                }}
                type="button"
                data-active={key === "monthly"}
                aria-pressed={key === "monthly"}
                onClick={() => handleBilling(key)}
                className="transition-fast rounded px-4 py-2 text-sm font-semibold text-[var(--muted)] data-[active=true]:bg-[var(--forsythia)] data-[active=true]:text-[#071114]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex rounded border border-white/10 bg-white/5 p-1" aria-label="Currency">
            {Object.keys(pricingConfig.currencies).map((key) => (
              <button
                key={key}
                ref={(node) => {
                  currencyButtonRefs.current[key] = node;
                }}
                type="button"
                data-active={key === "INR"}
                aria-pressed={key === "INR"}
                onClick={() => handleCurrency(key)}
                className="transition-fast rounded px-4 py-2 text-sm font-semibold text-[var(--muted)] data-[active=true]:bg-white data-[active=true]:text-[#071114]"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {pricingConfig.tiers.map((tier) => (
          <article
            key={tier.id}
            className={`premium-card rounded p-6 ${
              tier.featured
                ? "scale-[1.01] border-[var(--forsythia)]/80 shadow-[0_0_0_1px_rgba(255,200,1,0.36),0_34px_110px_rgba(255,153,50,0.18)]"
                : ""
            }`}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-tech text-xs uppercase tracking-[0.18em] text-[var(--deep-saffron)]">
                  {tier.badge}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{tier.name}</h3>
              </div>
              {tier.featured ? (
                <span className="rounded bg-[var(--forsythia)] px-3 py-1 text-xs font-bold text-[#071114]">
                  Best value
                </span>
              ) : null}
            </div>

            <p className="min-h-16 text-sm leading-6 text-[var(--muted)]">{tier.description}</p>

            <div className="my-7 rounded border border-white/10 bg-black/20 p-4">
              <span
                ref={(node) => {
                  priceRefs.current[tier.id] = node;
                }}
                className="font-tech text-4xl font-bold text-white"
              />
              <span
                ref={(node) => {
                  suffixRefs.current[tier.id] = node;
                }}
                className="ml-2 text-sm text-[var(--muted)]"
              />
            </div>

            <ul className="space-y-3 text-sm text-[var(--mystic-mint)]">
              {tier.features.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--forsythia)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#proof"
              className={`shine-button hover-lift mt-8 block rounded px-5 py-3 text-center font-semibold ${
                tier.featured
                  ? "bg-[var(--forsythia)] text-[#071114] hover:bg-[var(--deep-saffron)]"
                  : "border border-white/15 text-white hover:bg-white/10"
              }`}
            >
              Choose {tier.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PricingMatrix;