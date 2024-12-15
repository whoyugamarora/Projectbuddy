import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to ProjectBuddy</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            A collaborative platform where developers, designers, and creators come together to build something amazing.
          </p>
          <div className="mt-8">
            <a
              href="/listings"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
            >
              Explore Projects
            </a>
            <a
              href="/dashboard"
              className="ml-4 inline-block bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-indigo-800 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Discover Projects</h3>
            <p className="text-gray-600">
              Browse a wide range of projects in various technologies and find your next collaboration.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Connect with Talent</h3>
            <p className="text-gray-600">
              Meet developers, designers, and creators who share your passion for building great things.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Showcase Your Work</h3>
            <p className="text-gray-600">
              Upload your projects, gain recognition, and expand your professional network.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-600">
                "ProjectBuddy has been a game-changer for me. I've met amazing collaborators and built great projects."
              </p>
              <h4 className="mt-4 text-lg font-bold text-indigo-600">- John Doe</h4>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-600">
                "This platform helped me showcase my skills and find new opportunities in tech."
              </p>
              <h4 className="mt-4 text-lg font-bold text-indigo-600">- Jane Smith</h4>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-600">
                "Collaboration has never been this easy. ProjectBuddy is the perfect platform for creators!"
              </p>
              <h4 className="mt-4 text-lg font-bold text-indigo-600">- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <a
            href="/login"
            className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} ProjectBuddy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
