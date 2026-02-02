export const metadata = {
  title: "Pricing | Live by the Paddle",
  description: "Transparent pricing for all our canoe tours.",
};

export default function Pricing() {
  const plans = [
    {
      name: "Morning Lake Tour",
      price: "45",
      per: "person",
      features: ["2-hour guided tour", "Equipment included", "Small group"],
    },
    {
      name: "River Explorer",
      price: "80",
      per: "person",
      features: ["4-hour guided tour", "Equipment included", "Lunch pack"],
    },
    {
      name: "Sunset Expedition",
      price: "60",
      per: "person",
      features: ["3-hour guided tour", "Equipment included", "Photos included"],
    },
    {
      name: "Extreme Turbo Deathwish",
      price: "1,110",
      per: "person",
      features: ["37-hour guided tour", "Equipment included", "We hope you updated your will"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-purple-900 mb-4">Pricing</h1>
      <p className="text-gray-700 mb-12">
        Clear, per-person rates. No hidden fees. Group discounts available.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-black mb-2">
              {plan.name}
            </h2>
            <p className="text-2xl font-bold text-black mb-4">
              ${plan.price}
              <span className="text-sm font-normal text-gray-500">
                /{plan.per}
              </span>
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {plan.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
