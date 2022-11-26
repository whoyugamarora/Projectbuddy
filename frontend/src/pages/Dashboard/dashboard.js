import Navbar from '../../components/Navbar/index';
import React from 'react';
import Avvvatars from 'avvvatars-react'
import './dashboard.css';


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container">

        <div className="sidebar">
          <div class="sidebar-avatar">
            <p>Hi, My name is Yugam
              Hi, My name is Yugam</p>
          </div>
        </div>

        <div class="main">
          <div class="main-content">
            <p>Hi, My name is Yugam
              Hi, My name is Yugam</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;