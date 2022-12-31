import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/index';
import BasicCard from '../../components/Projectcard/projectcard';
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


    return (
        <>
            <Navbar />
            <br />
            <div className="account-page">
                <h2>{user.displayName}'s Profile</h2>
                <div className='account'>
                    <div className='topaccount'>
                        <div className='accountimg'>
                            <img src={user.photoURL} alt={user.name} />
                        </div>
                        <div className='accountskills'>
                            <h3>Skills:</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Java</li>
                                <li>NodeJS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='postings'>
                        <h3>My Postings:</h3>
                        <ul className='postingcards'>
                            {mylistings.map((project) => (
                                <BasicCard
                                    key={project.id}
                                    title={project.title}
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
