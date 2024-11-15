import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/index';
import BasicCard from '../../components/Projectcard/projectcard';
import Button from 'react-bootstrap/esm/Button';
import './account.css';

const AccountPage = ({ user }) => {
    const [mylistings, setMylistings] = useState([]); // User's projects
    const [formIsOpen, setFormIsOpen] = useState(false); // Form toggle
    const [skill, setSkill] = useState(''); // New skill input
    const [skills, setSkills] = useState([]); // User's skills
    const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(user.email)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

    // Fetch user's projects
    useEffect(() => {
        async function fetchMyListings() {
            try {
                const response = await axios.get('http://localhost:5000/projects');
                const myProjects = response.data.filter(
                    (project) => project.email === user.email
                );
                setMylistings(myProjects);
            } catch (error) {
                console.error("Error fetching user listings:", error);
            }
        }
        fetchMyListings();
    }, [user.email]);

    // Fetch user's skills
    useEffect(() => {
        async function fetchSkills() {
            try {
                const response = await axios.get(`http://localhost:5000/myaccount/${user.email}`);
                if (response.data?.skills) {
                    setSkills(response.data.skills);
                }
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        }
        fetchSkills();
    }, [user.email]);

    // Add a new skill
    const addSkill = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/myaccount/${user.email}`, {
                skill,
            });
            setSkills(response.data.skills);
            setSkill(''); // Clear input field
        } catch (error) {
            console.error("Error adding skill:", error);
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (skill.trim()) addSkill();
    };

    // Toggle the skill form
    const toggleForm = () => setFormIsOpen((prev) => !prev);

    // Delete a project
    const deleteProject = async (projectId) => {
        console.log('Attempting to delete project with ID:', projectId); // Debugging
        if (!projectId) {
            console.error('No project ID provided!');
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:5000/projects/${projectId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user.email }),
            });
    
            if (response.ok) {
                console.log('Project deleted successfully');
                setMylistings((prevListings) =>
                    prevListings.filter((project) => project.id !== projectId)
                );
            } else {
                const errorData = await response.json();
                console.error('Error deleting project:', errorData.message);
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };
    
    
    return (
        <>
            <Navbar />
            <div className="account-page">
                <div className="account">
                    <h2>{user.displayName}'s Profile</h2>
                    <div className="topaccount">
                        <div className="accountimg">
                            <img className="userpic" src={avatarUrl} alt="User Avatar" />
                        </div>
                        <div className="accountskills">
                            <div className="skillheading">
                                <h3>Skills:</h3>
                                <Button onClick={toggleForm}>
                                    {formIsOpen ? "Close Form" : "Add Skill"}
                                </Button>
                            </div>
                            {formIsOpen && (
                                <form className="skillform" onSubmit={handleSubmit}>
                                    <label>
                                        <input
                                            id="inputtext"
                                            type="text"
                                            value={skill}
                                            onChange={(e) => setSkill(e.target.value)}
                                            placeholder="Enter a skill"
                                        />
                                    </label>
                                    <input id="submitbutton" type="submit" value="Submit" />
                                </form>
                            )}
                            <ul className="skills-list">
                                {skills.length > 0 ? (
                                    skills.map((skill, index) => <li key={index}>{skill}</li>)
                                ) : (
                                    <li>No skills found</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="postings">
                        <h3>My Posts:</h3>
                        <ul className="postingcards">
                            {mylistings.length > 0 ? (
                                mylistings.map((project) => (
                                    <BasicCard
                                        key={project.id || project._id}
                                        userId={project.userId}
                                        currentUserEmail={user.email}
                                        project={project}
                                        title={project.title}
                                        subheader={project.author}
                                        description={project.description}
                                        stack={project.stack}
                                        email={project.email}
                                        onDelete={deleteProject}
                                    />
                                ))
                            ) : (
                                <li>No projects found</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountPage;
