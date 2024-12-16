import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import './newlisting.css';
import { auth } from '../firebase'; // Make sure this is your correct Firebase auth import

function AddProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stack, setStack] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // For form submission state

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Input validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!stack.trim()) newErrors.stack = 'Stack is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check if the user is authenticated
    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert('You must be logged in to add a listing');
      return;
    }

    const userId = currentUser.uid;
    const author = currentUser.displayName || 'Anonymous';
    const email = currentUser.email;

    try {
      setIsSubmitting(true); // Disable the form while submitting
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/projects`, {
        title,
        description,
        stack: stack.split(',').map((item) => item.trim()), // Split and trim stack
        userId,
        author,
        email,
      });
      console.log('Data saved successfully:', response.data);
      alert('Data Saved Successfully!');

      // Clear the form fields after successful submission
      setTitle('');
      setDescription('');
      setStack('');
      setErrors({});
    } catch (error) {
      console.error('Error saving data:', error.response?.data || error.message);
      alert('An error occurred while saving your listing. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable the form
    }
  };

  return (
    <div className="addnew">
      <Navbar />
      <div className="formdiv">
        <form onSubmit={handleSubmit}>
          <h2>Add New Listing</h2>
          <br />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            disabled={isSubmitting} // Disable input during submission
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            disabled={isSubmitting}
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
          <br />
          <label htmlFor="stack">Required Stack (comma-separated):</label>
          <input
            type="text"
            id="stack"
            value={stack}
            onChange={(event) => setStack(event.target.value)}
            disabled={isSubmitting}
          />
          {errors.stack && <p className="error-message">{errors.stack}</p>}
          <br />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Add Listing'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProjectForm;
