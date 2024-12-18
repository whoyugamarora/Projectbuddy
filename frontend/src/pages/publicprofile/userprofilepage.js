import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import BasicCard from '../../components/Projectcard/projectcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import BasicCardSkeleton from '../../components/Projectcard/BasicCardSkeleton';


const UserProfilePage = () => {
    const { userId } = useParams(); // Extract userId from the URL
    const [user, setUser] = useState(null); // User profile data
    const [projects, setProjects] = useState([]); // User's projects
    const [error, setError] = useState(null); // Error state
    const [loading, setLoading] = useState(true);

    const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(user?.email)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/profile/${userId}`);
                setUser(response.data.user);
                setProjects(response.data.projects);
            } catch (err) {
                console.error('Error fetching user profile:', err);
                setError(err.response?.data?.message || 'Error fetching user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId]);

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!user) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto py-10 px-4">
                {/* User Profile Section */}
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-around gap-3 bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <img
                            className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-4"
                            src={avatarUrl}
                            alt="User Avatar"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className="text-2xl font-bold text-gray-800">{user.displayName || 'User Profile'}</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                    </div>
                    <a
                        href={`mailto:${user.email}`}
                        className="mt-0 sm:mt-0 md:mt-0 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md flex items-center gap-2 hover:bg-indigo-700 transition duration-300 no-underline"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email
                    </a>
                </div>

                {/* User Projects Section */}
                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Projects:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading
                            ? // Show skeleton loader while loading
                            Array(3)
                                .fill(0)
                                .map((_, index) => <BasicCardSkeleton key={index} />)
                            :
                            projects.map((project) => (
                                <BasicCard
                                    key={project._id}
                                    userId={project.userId}
                                    project={project}
                                    title={project.title}
                                    subheader={project.author}
                                    description={project.description}
                                    stack={project.stack}
                                    email={project.email}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
