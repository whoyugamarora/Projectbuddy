import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/index';
import BasicCard from '../../components/Projectcard/projectcard';
import ReactDOM from 'react';
import { auth } from "../firebase";
import './listings.css';

const Listings = ({ user }) => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch('http://localhost:5000/projects');
            const data = await response.json();
            setProjects(data);
        }
        fetchProjects();
    }, []);

    return (
        <>
            <Navbar />
            <br />
            <div className="listingswrapped">
                <h2>ProjectBuddy Listings</h2>
                <br />
                <div className='listings'>
                    {projects.map((project) => (
                        <BasicCard
                            key={project.id}
                            title={project.title}
                            subheader={project.author}
                            description={project.description}
                            stack={project.stack}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Listings;
