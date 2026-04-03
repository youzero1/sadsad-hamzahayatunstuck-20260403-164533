export const metadata = {
  title: 'About Us - LaptopHub',
  description: 'Learn about LaptopHub and our mission'
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About LaptopHub</h1>
      <div className="prose prose-lg text-gray-600 space-y-6">
        <p className="text-xl leading-relaxed">
          LaptopHub is your one-stop destination for premium laptops. We curate the best laptops
          from world-renowned brands to help you find the perfect device for your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Top Brands</h3>
            <p className="text-gray-600 text-sm">We carry products from Apple, Dell, HP, Lenovo, ASUS, and more.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">Enjoy free shipping on all orders over $500.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">2-Year Warranty</h3>
            <p className="text-gray-600 text-sm">All our products come with a 2-year manufacturer warranty.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
        <p>
          Founded in 2020, LaptopHub started with a simple mission: make it easy for everyone to
          find and buy the right laptop. Whether you&apos;re a student, professional, gamer, or creative,
          we have the perfect machine for you.
        </p>
        <p>
          Our team of tech experts carefully tests and reviews every laptop we sell, ensuring you
          get the best value for your money. We believe technology should empower you, not confuse you.
        </p>
        <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">✓</span>
            <span>Genuine products with full manufacturer warranty</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">✓</span>
            <span>30-day hassle-free return policy</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">✓</span>
            <span>24/7 customer support</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">✓</span>
            <span>Secure and encrypted payment processing</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">✓</span>
            <span>Expert advice from our tech specialists</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
