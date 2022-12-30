import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import './newlisting.css'

function AddProjectForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [stack, setStack] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Send the data to the server to be saved
      axios.post("http://localhost:5000/projects",  {
        title: title,
        description: description,
        stack: stack.split(',') // Split the stack string on commas to create an array of strings
      })
        .then(response => {
          // The data has been saved successfully
          console.log('Data saved successfully');
        })
        .catch(error => {
          // An error occurred while saving the data
          console.error(error);
        });
    };
      
    return (
        <div className='addnew'>
            <Navbar />
            <div className='formdiv'>
                <form onSubmit={handleSubmit}>
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
