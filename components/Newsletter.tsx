export default function Newsletter() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-blue-200 mb-8">
          Subscribe to our newsletter for the latest laptop deals, reviews, and tech news.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-blue-300 text-xs mt-4">No spam, unsubscribe at any time.</p>
      </div>
    </section>
  );
}
