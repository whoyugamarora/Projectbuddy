import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import BasicCard from '../../components/Projectcard/projectcard';
import './userprofilepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const UserProfilePage = () => {
    const { userId } = useParams(); // Extract userId from the URL
    const [user, setUser] = useState(null); // User profile data
    const [projects, setProjects] = useState([]); // User's projects
    const [error, setError] = useState(null); // Error state
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
            }
        };

        fetchUserProfile();
    }, [userId]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar />
            <div className="user-profile">
                <div className='headingwrap'>
                    <div className='userimgdiv'>
                        <img
                            className='userpic1'
                            src={avatarUrl}
                            alt='User Avatar'
                        />
                    </div>
                    <div className="user-info">
                        <h2>{user.displayName || 'User Profile'}</h2>
                        <p>Email: {user.email}</p>
                    </div>
                    <Button as="a" href={`mailto:${user.email}`} className='emailbutton' style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        height: 'fit-content',
                        backgroundColor: '#4f46e5',
                        color: '#fff',
                        padding: '10px 15px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '0.75rem',
                    }}>
                        <FontAwesomeIcon icon={faEnvelope} />Email
                    </Button>
                </div>
                <div className="user-projects">
                    <h3>Projects:</h3>
                    <div className="project-list">
                        {projects.map((project) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
