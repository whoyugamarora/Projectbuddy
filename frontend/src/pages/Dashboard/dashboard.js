import Navbar from '../../components/Navbar/index';
import ReactDOM from 'react';
import { auth } from "../firebase";
import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectCard from '../../components/Projectcard/projectcard';
import './dashboard.css';

function repeatprojectcard(numRepeats) {
  const projectCards = [];
  for (let i = 0; i < numRepeats; i++) {
    projectCards.push(<ProjectCard key={i} />);
  }
  return projectCards;
}

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
              <img className="userpic" src={user.photoURL} alt="User Image" />
              <br />
              <Card.Subtitle className="mb-2 text-muted displayname">
                Logged in as {user.displayName}

              </Card.Subtitle>

            </Card.Body>
          </div>
        </div>

        <div className="main">
          <div className="main-content">
            
            <h2>Java</h2>
            <div className='projectcards'>
              {repeatprojectcard(3)}
            </div>
            <br/>
            <h2>SQL</h2>
            <div className='projectcards'>
              {repeatprojectcard(3)}
            </div>
            <br/>
            <h2>Python</h2>
            <div className='projectcards'>
              {repeatprojectcard(3)}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;