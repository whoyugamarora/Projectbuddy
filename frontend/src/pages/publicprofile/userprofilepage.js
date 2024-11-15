import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import BasicCard from '../../components/Projectcard/projectcard';
import './userprofilepage.css';

const UserProfilePage = () => {
    const { userId } = useParams(); // Extract userId from the URL
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        console.log('Fetching profile for userId:', userId); // Debugging
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/projects/profile/${userId}`);
                setUser(response.data.user);
                setProjects(response.data.projects);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
    
        fetchUserProfile();
    }, [userId]);
    
    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar />
            <div className="user-profile">
                <div className="user-info">
                    <h2>{user.displayName || 'User Profile'}</h2>
                    <p>Email: {user.email}</p>
                </div>
                <div className="user-projects">
                    <h3>Projects:</h3>
                    <div className="project-list">
                        {projects.map((project) => (
                            <BasicCard
                                key={project.id || project._id}
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
