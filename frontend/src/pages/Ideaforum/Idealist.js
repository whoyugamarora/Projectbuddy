import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Correct import
import ReusableCard from '../../components/Ideacard/Ideacard';

const IdeasList = () => {
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const response = await axios.get('http://localhost:5000/idea');
                setIdeas(response.data);
            } catch (err) {
                console.error('Failed to fetch ideas:', err.message);
            }
        };

        fetchIdeas();
    }, []);

    const handleUpvote = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/idea/${id}/upvote`);
            setIdeas((prevIdeas) =>
                prevIdeas.map((idea) => (idea._id === id ? response.data : idea))
            );
        } catch (err) {
            console.error('Failed to upvote:', err.message);
        }
    };

    return (
        <div className="p-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Project Ideas</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {ideas.map((idea) => (
                    <ReusableCard
                        key={idea._id}
                        avatarSeed={idea.email}
                        title={idea.title}
                        author={idea.author}
                        description={idea.description}
                        votes={idea.votes}
                        createdAt={idea.createdAt}
                        onUpvote={() => handleUpvote(idea._id)}
                    />
                ))}
            </ul>


        </div>
    );
};

export default IdeasList;
