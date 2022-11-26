import Navbar from '../../components/Navbar/index';
import { auth } from "../firebase";
import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './dashboard.css';


const Dashboard = ({ user }) => {
  return (
    <div>
      <Navbar />
      <div className="container">

        <div className="sidebar">
          <div className="sidebar-avatar">
              <Card.Body>
                <Card.Title>Welcome</Card.Title>
                <Card.Subtitle className="mb-2 text-muted displayname">
                  {user.displayName}
                </Card.Subtitle>
                <img src={user.photoURL} alt=""  />
                <Button
                  style={{ margin: '5%' }}
                  variant="outline-danger"
                  type="submit"
                  id="signbtn"
                  onClick={() => auth.signOut()}
                >
                  Sign Out
                </Button>
              </Card.Body>
          </div>
        </div>

        <div className="main">
          <div className="main-content">


          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;