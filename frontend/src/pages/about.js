import React from 'react';
import Navbar from '../components/Navbar/index';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">About ProjectBuddy</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Your go-to platform for connecting developers, designers, and creators to collaborate, innovate, and bring ideas to life.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">Why Choose ProjectBuddy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
            <h3 className="text-2xl font-bold mb-2 text-indigo-600">Discover Projects</h3>
            <p className="text-gray-600 leading-relaxed">
              Explore collaborative projects across various domains and technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
            <h3 className="text-2xl font-bold mb-2 text-indigo-600">Showcase Your Skills</h3>
            <p className="text-gray-600 leading-relaxed">
              Share your work, demonstrate your expertise, and gain recognition.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
            <h3 className="text-2xl font-bold mb-2 text-indigo-600">Collaborate and Learn</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with like-minded people, contribute, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-indigo-100 py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            We aim to build a community-driven platform where creators, developers, and innovators can collaborate seamlessly, share ideas, and bring meaningful projects to life. At <span className="font-bold">ProjectBuddy</span>, we believe that teamwork fuels innovation.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-16 px-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Ready to Explore and Collaborate?
        </h3>
        <a
          href="/listings"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} ProjectBuddy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
