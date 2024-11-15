import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/index';
import BasicCard from '../../components/Projectcard/projectcard';
import Button from 'react-bootstrap/esm/Button';
import firebase from '../firebase';
import './account.css';

const AccountPage = ({ user }) => {
    const [mylistings, setMylistings] = useState([]);
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;
    const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(user.email)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;


    useEffect(() => {
        async function fetchmylistings() {
            try {
                const response = await fetch('http://localhost:5000/projects');
                const data = await response.json();
                const myProjects = data.filter(project => project.userId === uid);
                setMylistings(myProjects);
            } catch (error) {
                console.error(error);
            }
        }
        if (uid) fetchmylistings();
    }, [uid]);

    const openForm = () => {
        setFormIsOpen(!formIsOpen);
    };

    const handleChange = (event) => {
        setSkill(event.target.value);
    };

    const addSkill = (skill) => {
        axios.get(`http://localhost:5000/myaccount/${uid}`)
            .then((response) => {
                if (response.data) {
                    axios.put(`http://localhost:5000/myaccount/${uid}`, { skills: [...response.data.skills, skill] })
                        .then((response) => {
                            setSkills([...response.data.skills, skill]);
                        })
                        .catch((error) => console.error(error));
                } else {
                    axios.post('http://localhost:5000/myaccount', { userId: uid, skills: [skill] })
                        .then((response) => {
                            setSkills([skill]);
                        })
                        .catch((error) => console.error(error));
                }
            })
            .catch((error) => console.error(error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSkill(skill);
        setSkill('');  // Clear input field after submit
    };

    useEffect(() => {
        async function fetchSkills() {
            try {
                const response = await axios.get(`http://localhost:5000/myaccount/${uid}`);
                if (response.data && response.data.skills) {
                    setSkills(response.data.skills);
                }
            } catch (error) {
                console.error(error);
            }
        }
        if (uid) fetchSkills();
    }, [uid]);


    return (
        <>
            <Navbar />
            <div className="account-page">
                <div className='account'>
                <h2>{user.displayName}'s Profile</h2>
                    <div className='topaccount'>
                        <div className='accountimg'>
                        <img
                            className='userpic'
                            src={avatarUrl}
                            alt='User Avatar'
                        />
                        </div>
                        <div className='accountskills'>
                            <div className='skillheading'>
                                <h3>Skills:</h3>
                                <Button onClick={openForm}>Add Skill</Button>
                            </div>
                            {formIsOpen && (
                                <form className='skillform' onSubmit={handleSubmit}>
                                    <label>
                                        <input id='inputtext' type="text" value={skill} onChange={handleChange} />
                                    </label>
                                    <input id='submitbutton' type="submit" value="Submit" />
                                </form>
                            )}
                            <ul className='skills-list'>
                                {skills && skills.length > 0 ? (
                                    skills.map((skill, index) => <li key={index}>{skill}</li>)
                                ) : (
                                    <li>No skills found</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='postings'>
                        <h3>My Posts:</h3>
                        <ul className='postingcards'>
                        {mylistings && mylistings.length > 0 ? (
                            mylistings.map((project) => (
                                <BasicCard
                                key={project.id}
                                title={project.title}
                                subheader={project.author}
                                description={project.description}
                                stack={project.stack}
                                email={project.email}
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
