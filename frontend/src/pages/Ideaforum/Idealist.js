import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Correct import
import ReusableCard from '../../components/Ideacard/Ideacard';
import BasicCardSkeleton from '../../components/Projectcard/BasicCardSkeleton';


const IdeasList = () => {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/idea`);
                setIdeas(response.data);
            } catch (err) {
                console.error('Failed to fetch ideas:', err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchIdeas();
    }, []);

    const handleUpvote = async (id) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/idea/${id}/upvote`);
            setIdeas((prevIdeas) =>
                prevIdeas.map((idea) => (idea._id === id ? response.data : idea))
            );
        } catch (err) {
            console.error('Failed to upvote:', err.message);
        }
    };

    return (
        <div className="p-6 bg-gray-50 rounded shadow flex justify-center items-center">
            <div className="w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Project Ideas
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-0">
                    {loading
                        ? // Show skeleton loader while loading
                        Array(3)
                            .fill(0)
                            .map((_, index) => <BasicCardSkeleton key={index} />)
                        :
                            ideas.map((idea) => (
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
                            ))
                        }
                </ul>
            </div>
        </div>

    );
};

export default IdeasList;
