import Avatar, { ConfigProvider } from 'react-avatar';
import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar_top">
          <img src="" alt="" />
          <Avatar className="sidebar_avatar" size={80} round={true} />
          <h3> Pratham Pachchigar</h3>
          <h6>prathampachchigar@student.ufv.ca</h6>
        </div>

        <div className="sidebar_stats">
          <div className="sidebar_stats">
            <p>views</p>
          </div>

          <div className="sidebar_bottom">
            <p>My Skills (Dropdown or something?)</p>
          </div>

        </div>
      </div>
      <div class="main">
        <p>Hello World</p>
      </div>
      <div class="sidebar">
        <p>HAHAHAHA</p>
      </div>
    </div>
  );
}

export default Dashboard;