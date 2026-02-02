export const metadata = {
  title: "Tours | Live by the Paddle",
  description: "Explore our selection of guided canoe tours.",
};

export default function Tours() {
  const tours = [
    {
      name: "Morning Lake Tour",
      duration: "2 hours",
      difficulty: "Beginner",
      description: "Gentle paddle on calm waters. Ideal for families and first-timers.",
    },
    {
      name: "River Explorer",
      duration: "4 hours",
      difficulty: "Intermediate",
      description: "Navigate scenic river stretches with light current. Some experience recommended.",
    },
    {
      name: "Sunset Expedition",
      duration: "3 hours",
      difficulty: "All levels",
      description: "End the day with a peaceful paddle as the sun sets over the water.",
    },
    {
      name: "Extreme Turbo Deathwish",
      duration: "37 hours",
      difficulty: "Experts Only!",
      description: "Enjoy a pleasant near-death experience, headed by our best guide. And yes, you do have to sign the liability waiver.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-purple-900 mb-4">Our Tours</h1>
      <p className="text-gray-700 mb-12">
        Choose from a variety of guided experiences suited to your skill level and schedule.
      </p>

      <div className="space-y-8">
        {tours.map((tour, i) => (
          <article
            key={i}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-black mb-2">
              {tour.name}
            </h2>
            <div className="flex gap-4 text-sm text-gray-500 mb-3">
              <span>{tour.duration}</span>
              <span>{tour.difficulty}</span>
            </div>
            <p className="text-gray-700">{tour.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
