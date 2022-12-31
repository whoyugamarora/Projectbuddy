import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/index';
import BasicCard from '../../components/Projectcard/projectcard';
import Button from 'react-bootstrap/esm/Button';
import ReactDOM from 'react';
import firebase from '../firebase';
import { auth } from "../firebase";
import './account.css';

const AccountPage = ({ user }) => {

    const [mylistings, setMylistings] = useState([]);
    const uid = firebase.auth().currentUser.uid;

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
        fetchmylistings();
    }, []);

    const [formIsOpen, setFormIsOpen] = useState(false);
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);

    const openForm = () => {
        setFormIsOpen(!formIsOpen);
    }

    const handleChange = (event) => {
        setSkill(event.target.value);
    }

    const addSkill = (skill) => {
        // Check if the user already has a document in the database
        axios.get(`http://localhost:5000/myaccount/${uid}`)
            .then((response) => {
                // If the user already has a document, update the existing document with the new skill
                if (response.data) {
                    axios.put(`http://localhost:5000/myaccount/${uid}`, { skills: [...response.data.skills, skill] })
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                } else {
                    // If the user does not have a document, create a new document with the new skill
                    axios.post('http://localhost:5000/myaccount', { userId: uid, skills: [skill] })
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addSkill(skill);
    }

    useEffect(() => {
        async function fetchSkills() {
            try {
                const response = await axios.get(`http://localhost:5000/myaccount/${uid}`);
                setSkills(response.data.skills);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSkills();
    }, [skills]);

    return (
        <>
            <Navbar />
            <br />
            <div className="account-page">
                <h2>{user.displayName}'s Profile</h2>
                <br />
                <div className='account'>
                    <div className='topaccount'>
                        <div className='accountimg'>
                            <img src={user.photoURL} alt={user.name} />
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
                            {skills.map((skill, index) => <li key={index}>{skill}</li>)}                            </ul>
                        </div>
                    </div>
                    <div className='postings'>
                        <h3>My Postings:</h3>
                        <ul className='postingcards'>
                            {mylistings.map((project) => (
                                <BasicCard
                                    key={project.id}
                                    title={project.title}
                                    subheader={project.author}
                                    description={project.description}
                                    stack={project.stack}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountPage;
