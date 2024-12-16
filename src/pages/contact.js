import React from "react";
import Navbar from "../components/Navbar/index";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Have questions or feedback? We're here to help! Fill out the form below or reach us directly.
          </p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Contact Us</h2>
          <form className="space-y-4 w-full">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200"
                placeholder="Write your message"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold text-indigo-600">Contact Information</h2>
          <p className="text-gray-600">
            Feel free to reach out to us directly through the following channels:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">support@projectbuddy.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">123 Innovation Drive, Tech City, 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} ProjectBuddy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
