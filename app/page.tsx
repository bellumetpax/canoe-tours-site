import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">
          Explore Scenic Waters
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Experience guided canoe tours on pristine lakes and rivers. Suitable for beginners and experienced paddlers alike.
        </p>
        <Link
          href="/tours"
          className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-900 transition-colors"
        >
          View Tours
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-semibold text-black mb-2">Guided Adventures</h2>
          <p className="text-gray-700 text-sm">
            Expert guides lead every trip. Learn paddling techniques and local history.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-semibold text-black mb-2">All Skill Levels</h2>
          <p className="text-gray-700 text-sm">
            Tours range from calm waters for beginners to challenging routes for seasoned paddlers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-semibold text-black mb-2">Quality Equipment</h2>
          <p className="text-gray-700 text-sm">
            Canoes, paddles, and safety gear provided. Just bring your sense of adventure.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}
