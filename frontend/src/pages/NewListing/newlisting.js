import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import './newlisting.css'
import { useRadioGroup } from '@mui/material';
import firebase from 'firebase/compat/app';

function AddProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stack, setStack] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = firebase.auth().currentUser.uid;
    const author = firebase.auth().currentUser.displayName;
    const email = firebase.auth().currentUser.email; // Get current user email

    // Send the data to the server to be saved
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
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
          <label htmlFor="stack">Required Stack:</label>
          <input
            type="text"
            id="stack"
            value={stack}
            onChange={(event) => setStack(event.target.value)}
          />
          <br />
          <button type="submit">Add Listing</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;