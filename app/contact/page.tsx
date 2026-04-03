export const metadata = {
  title: 'Contact Us - LaptopHub',
  description: 'Get in touch with our support team'
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-500 mb-12">We&apos;re here to help. Reach out to us anytime.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            <button type="submit" className="btn-primary w-full py-3">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">📍 Address</h3>
            <p className="text-gray-600">123 Tech Street, Silicon Valley<br />San Francisco, CA 94102</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">📞 Phone</h3>
            <p className="text-gray-600">+1 (800) 555-LAPTOP<br />Mon-Fri, 9am-6pm PST</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">✉️ Email</h3>
            <p className="text-gray-600">support@laptophub.com<br />sales@laptophub.com</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">⏰ Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
