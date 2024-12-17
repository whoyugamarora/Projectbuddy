import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { auth } from '../firebase'; // Ensure the correct Firebase auth import

function AddProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stack, setStack] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!stack.trim()) newErrors.stack = 'Stack is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert('You must be logged in to add a listing');
      return;
    }

    const userId = currentUser.uid;
    const author = currentUser.displayName || 'Anonymous';
    const email = currentUser.email;

    try {
      setIsSubmitting(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/projects`, {
        title,
        description,
        stack: stack.split(',').map((item) => item.trim()),
        userId,
        author,
        email,
      });
      console.log('Data saved successfully:', response.data);
      alert('Listing Added Successfully!');
      setTitle('');
      setDescription('');
      setStack('');
      setErrors({});
    } catch (error) {
      console.error('Error saving data:', error.response?.data || error.message);
      alert('An error occurred while saving your listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Form Container */}
      <div className="flex flex-1 items-center justify-center px-4 py-6">
        <div
          className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md 
          min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
        >
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center text-indigo-700 mb-8">
            Add New Listing
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-12 md:space-y-12 lg:space-y-12">
            {/* Title Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isSubmitting}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
              {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
            </div>

            {/* Description Input */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isSubmitting}
                rows="4"
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              ></textarea>
              {errors.description && (
                <p className="text-sm text-red-500 mt-1">{errors.description}</p>
              )}
            </div>

            {/* Stack Input */}
            <div>
              <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                Required Stack (comma-separated):
              </label>
              <input
                type="text"
                id="stack"
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                disabled={isSubmitting}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
              {errors.stack && <p className="text-sm text-red-500 mt-1">{errors.stack}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 text-white font-medium rounded-md ${
                  isSubmitting
                    ? 'bg-indigo-600 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } transition duration-200`}
              >
                {isSubmitting ? 'Submitting...' : 'Add Listing'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProjectForm;
