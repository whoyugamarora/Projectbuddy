import Navbar from '../../components/Navbar/index';
import React, { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectCard from '../../components/Projectcard/projectcard';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import axios from 'axios';
import BasicCard from '../../components/Projectcard/projectcard';

function repeatprojectcard(projectData, skill, user) {
  const filteredProjects = Array.isArray(projectData) 
    ? projectData.filter(project => project.stack.includes(skill)).slice(0,3)
    : [];
  
  return filteredProjects.map(project => (
    <BasicCard 
      key={project.id} 
      userId={project.userId} // Pass uploader’s userId here
      project={project}
      title={project.title}
      subheader={project.author}
      description={project.description}
      stack={project.stack}
      email={project.email}
    />
  ));
}

const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState([]);
  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(user.email)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

  const navigateToListings = () => {
    navigate('/listings');
  };

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('http://localhost:5000/projects');
        const data = await response.json();
        setProjectData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setProjectData([]); // Set to empty array in case of error
      }
    }
    fetchProjects();
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className="containerx">
        <div className="sidebar">
          <div className="sidebar-avatar">
            <Card.Body className='cardbody'>
              <Card.Title>Welcome</Card.Title>
               <br />
               <img
                  className='userpic'
                  src={avatarUrl}
                  alt='User Avatar'
                />
              <br />
              <Card.Subtitle className="mb-2 text-muted displayname">
                Logged in as {user.displayName}
              </Card.Subtitle>
              <br/><br/>
            </Card.Body>
          </div>
        </div>

        <div className="main">
          <div className="main-content">
            <h2>Featured Projects</h2>
            <br/>
            <div className="project-section">
              <div className="project-header">
                <h3>Java</h3>
                <Button className="listings-button" onClick={navigateToListings}>
                  View All Java Projects
                </Button>
              </div>
              <div className='projectcards'>
                {repeatprojectcard(projectData, "Java", user)}
              </div>
            </div>
            <br/>
            <div className="project-section">
              <div className="project-header">
                <h3>SQL</h3>
                <Button className="listings-button" onClick={navigateToListings}>
                  View All SQL Projects
                </Button>
              </div>
              <div className='projectcards'>
                {repeatprojectcard(projectData, "SQL", user)}
              </div>
            </div>
            <br/>
            <div className="project-section">
              <div className="project-header">
                <h3>Python</h3>
                <Button className="listings-button" onClick={navigateToListings}>
                  View All Python Projects
                </Button>
              </div>
              <div className='projectcards'>
                {repeatprojectcard(projectData, "Python", user)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
