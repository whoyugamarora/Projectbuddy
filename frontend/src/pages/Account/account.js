import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/index';
import BasicCard from '../../components/Projectcard/projectcard';
import ReusableCard from '../../components/Ideacard/Ideacard';

const AccountPage = ({ user }) => {
    const [mylistings, setMylistings] = useState([]);
    const [myIdeas, setMyIdeas] = useState([]);
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(user.email)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

    useEffect(() => {
        async function fetchMyListings() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
                const myProjects = response.data.filter((project) => project.email === user.email);
                setMylistings(myProjects);
                const idearesponse = await axios.get(`${process.env.REACT_APP_API_URL}/idea/`);
                const myIdeas = idearesponse.data.filter((idea) => idea.email === user.email);
                console.log(myIdeas);
                setMyIdeas(myIdeas);
            } catch (error) {
                console.error("Error fetching user listings:", error);
            }
        }
        fetchMyListings();
    }, [user.email]);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/myaccount/${user.email}`);
                if (response.data?.skills) {
                    setSkills(response.data.skills);
                }
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        }
        fetchSkills();
    }, [user.email]);

    const addSkill = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/myaccount/${user.email}`, {
                skill,
            });
            setSkills(response.data.skills);
            setSkill('');
        } catch (error) {
            console.error("Error adding skill:", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (skill.trim()) addSkill();
    };

    const toggleForm = () => setFormIsOpen((prev) => !prev);

    const deleteProject = async (projectId) => {
        if (!projectId) return;

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/projects/${projectId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: user.email }),
            });

            if (response.ok) {
                setMylistings((prevListings) => prevListings.filter((project) => project.id !== projectId));
            } else {
                const errorData = await response.json();
                console.error('Error deleting project:', errorData.message);
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <div className="container mx-auto px-2.5 md:px-4 py-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center gap-6 mb-8">
                        <img
                            className="w-24 h-24 rounded-full shadow-md border-2 border-indigo-500"
                            src={avatarUrl}
                            alt="User Avatar"
                        />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">{user.displayName}'s Profile</h2>
                            <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
                            <button
                                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow hover:bg-indigo-700 transition"
                                onClick={toggleForm}
                            >
                                {formIsOpen ? 'Close Form' : 'Add Skill'}
                            </button>
                        </div>
                        {formIsOpen && (
                            <form className="flex items-center gap-4 mb-4" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={skill}
                                    onChange={(e) => setSkill(e.target.value)}
                                    placeholder="Enter a skill"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                        <ul className="flex flex-wrap gap-3">
                            {skills.length > 0 ? (
                                skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-lg shadow"
                                    >
                                        {skill}
                                    </li>
                                ))
                            ) : (
                                <li className="text-sm text-gray-500">No skills found</li>
                            )}
                        </ul>
                    </div>

                    <div className='my-4'>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">My Posts</h3>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                                <p className="text-sm text-gray-500">No projects found</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">My Ideas</h3>
                        <div className="list-none grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {myIdeas.length > 0 ? (
                                myIdeas.map((idea) => (
                                    <ReusableCard
                                        key={idea._id}
                                        avatarSeed={idea.email}
                                        title={idea.title}
                                        author={idea.author}
                                        description={idea.description}
                                        votes={idea.votes}
                                        createdAt={idea.createdAt}
                                    />
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">No Ideas found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
