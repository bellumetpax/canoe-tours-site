import Link from "next/link";

export const metadata = {
  title: "About | Live by the Paddle",
  description: "Learn about Live by the Paddle and our mission.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-purple-900 mb-4">About Us</h1>
      <p className="text-gray-700 mb-6">
        Live by the Paddle (and Die by the Paddle) has been guiding adventurers on local waters for over a month. Our certified guides combine expertise in paddling with deep knowledge of the region&apos;s natural history and ecology.
      </p>
      <p className="text-gray-700 mb-6">
        We believe everyone deserves access to &quot;safe,&quot; memorable outdoor experiences. Whether you&apos;re new to canoeing or an extreme adventure enthusiast looking for that special experience that helps you appreciate your time on Earth, we tailor each tour to your comfort and goals.
      </p>
      <p className="text-gray-700 mb-8">
        For legal reasons, we must state that safety is our priority. All tours include a briefing, quality equipment, and a first-aid certified guide who will pretend to care about your well-being.
      </p>
      <Link
        href="/contact"
        className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-900 transition-colors"
      >
        Get in Touch
      </Link>
    </div>
  );
}
