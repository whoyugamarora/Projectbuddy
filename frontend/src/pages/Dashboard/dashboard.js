import Navbar from '../../components/Navbar/index';
import { auth } from "../firebase";
import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectCard from '../../components/Projectcard/projectcard';
import './dashboard.css';


const Dashboard = ({ user }) => {
  return (
    <div>
      <Navbar />
      <div className="containerx">
        <div className="sidebar">
          <div className="sidebar-avatar">
              <Card.Body className='cardbody'>
                <Card.Title>Welcome</Card.Title>
                <br />
                <img className ="userpic" src={user.photoURL} alt="User Image"  />
                <br />
                <Card.Subtitle className="mb-2 text-muted displayname">
                  Logged in as {user.displayName}
                
                </Card.Subtitle>
                
              </Card.Body>
          </div>
        </div>

        <div className="main">
          <div className="main-content">
            <ProjectCard/>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;