export const pricingConfig = {
  annualDiscount: 0.8,
  billing: {
    monthly: {
      label: "Monthly",
      months: 1,
      suffix: "/mo",
    },
    annual: {
      label: "Annual",
      months: 12,
      suffix: "/mo, billed annually",
    },
  },
  currencies: {
    INR: {
      code: "INR",
      symbol: "₹",
      conversionRate: 83,
      regionalTariff: 0.72,
      locale: "en-IN",
      precision: 0,
    },
    USD: {
      code: "USD",
      symbol: "$",
      conversionRate: 1,
      regionalTariff: 1,
      locale: "en-US",
      precision: 0,
    },
    EUR: {
      code: "EUR",
      symbol: "€",
      conversionRate: 0.92,
      regionalTariff: 1.08,
      locale: "de-DE",
      precision: 0,
    },
  },
  tiers: [
    {
      id: "launch",
      name: "Launch",
      description: "For founders and small teams automating their first critical workflows.",
      baseMonthlyUsd: 49,
      badge: "Operator ready",
      features: ["3 active AI workflows", "10K data operations", "Email support", "Workflow analytics"],
    },
    {
      id: "scale",
      name: "Scale",
      description: "For growing teams that need custom agents across revenue and operations.",
      baseMonthlyUsd: 149,
      badge: "Most chosen",
      featured: true,
      features: ["15 active AI workflows", "100K data operations", "Priority support", "Custom agent builder"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For organizations deploying governed automation across multiple teams.",
      baseMonthlyUsd: 399,
      badge: "Governed AI",
      features: ["Unlimited workflow design", "Dedicated automation architect", "Security review", "SLA support"],
    },
  ],
};

export function calculateTierPrice(tier, billingKey, currencyKey) {
  const billing = pricingConfig.billing[billingKey];
  const currency = pricingConfig.currencies[currencyKey];
  const discountedBase =
    tier.baseMonthlyUsd * (billingKey === "annual" ? pricingConfig.annualDiscount : 1);
  const regionalPrice = discountedBase * currency.conversionRate * currency.regionalTariff;

  return new Intl.NumberFormat(currency.locale, {
    maximumFractionDigits: currency.precision,
    minimumFractionDigits: currency.precision,
  }).format(regionalPrice);
}