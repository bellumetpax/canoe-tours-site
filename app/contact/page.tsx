export const metadata = {
  title: "Contact | Live by the Paddle",
  description: "Get in touch with Live by the Paddle.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-purple-900 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        Have questions about our tours or ready to book? Reach out and we&apos;ll get back to you maybe.
      </p>
      <a
        href="mailto:info@canoetours.example.com?subject=Canoe%20Tour%20Inquiry"
        className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-900 transition-colors"
      >
        Email us
      </a>
    </div>
  );
}
