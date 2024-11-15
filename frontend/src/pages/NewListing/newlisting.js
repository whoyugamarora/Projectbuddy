import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import './newlisting.css';
import firebase from 'firebase/compat/app';

function AddProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stack, setStack] = useState('');
  const [errors, setErrors] = useState({});

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

    const userId = firebase.auth().currentUser.uid;
    const author = firebase.auth().currentUser.displayName;
    const email = firebase.auth().currentUser.email;

    try {
      const response = await axios.post("http://localhost:5000/projects", {
        title,
        description,
        stack: stack.split(','),
        userId,
        author,
        email,
      });
      console.log('Data saved successfully:', response.data);
      alert("Data Saved Successfully!");

      // Clear the form fields after successful submission
      setTitle('');
      setDescription('');
      setStack('');
      setErrors({}); // Clear any existing errors
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className='addnew'>
      <Navbar />
      <div className='formdiv'>
        <form onSubmit={handleSubmit}>
          <h2>Add New Listing</h2>
          <br />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
          <br />
          <label htmlFor="stack">Required Stack:</label>
          <input
            type="text"
            id="stack"
            value={stack}
            onChange={(event) => setStack(event.target.value)}
          />
          {errors.stack && <p className="error-message">{errors.stack}</p>}
          <br />
          <button type="submit">Add Listing</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;
