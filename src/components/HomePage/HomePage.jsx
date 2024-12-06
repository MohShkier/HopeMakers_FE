import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Empowering People with Disabilities</h1>
        <p className="text-xl mb-6">Access the tools and resources you need to live independently.</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sign Up",
              "Create a Request",
              "Browse Options",
              "Donate or Offer Help",
              "Confirm and Support",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-semibold">{`Step ${index + 1}: ${step}`}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools and Devices */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Wheelchair", "Hearing Aid", "Reaching Device"].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-semibold">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <div className="bg-white p-6 shadow-md rounded-lg mx-auto max-w-lg border border-gray-200">
            <p className="text-lg font-semibold">
              "This platform has helped me find the tools I need to live independently!"
            </p>
            <span className="block mt-4 text-gray-600">- John Doe</span>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Donate Now
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* News and Blog Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "The Latest Tools for Accessibility in 2024",
              "How Assistive Technology is Changing Lives",
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg border border-gray-200"
              >
                <p className="text-lg font-semibold">{news}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white py-6 text-center">
        <div className="space-x-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
            Sign Up for Updates
          </button>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
