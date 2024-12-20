import React, { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase'; // Make sure this is your correct Firebase auth import

const AddIdeaForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/idea/`, { title, description, userId, author, email });
            alert('Idea submitted successfully!');
            setTitle('');
            setDescription('');
        } catch (err) {
            console.error('Failed to submit idea:', err.message);
        }
    };

    const currentUser = auth.currentUser;
    if (!currentUser) {
        alert('You must be logged in to add a Idea');
        return;
    }

    const userId = currentUser.uid;
    const author = currentUser.displayName || 'Anonymous';
    const email = currentUser.email;

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 rounded shadow w-full h-full space-y-2 px-4 py-10">
            <h2 className="font-bold text-center">Share a New Idea</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border p-2 w-full mb-4"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="border p-2 w-full mb-4"
                required
            />
            <div className='flex items-center justify-center mx-auto'>
            <button
                type="submit"
                className="w-3/4 bg-green-500 text-white px-4 py-2 rounded"
            >
                Submit Idea
            </button>
            </div>
        </form>
    );
};

export default AddIdeaForm;
