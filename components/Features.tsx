export default function Features() {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on all orders over $500. Fast delivery in 2-3 business days.'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Your payment information is always safe with our 256-bit SSL encryption.'
    },
    {
      icon: '↩️',
      title: '30-Day Returns',
      description: "Not satisfied? Return your laptop within 30 days for a full refund."
    },
    {
      icon: '🛡️',
      title: '2-Year Warranty',
      description: 'All products come with a 2-year manufacturer warranty for peace of mind.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
