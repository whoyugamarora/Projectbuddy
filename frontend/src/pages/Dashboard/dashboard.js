import Navbar from '../../components/Navbar/index';
import React, { useEffect, useState } from 'react';
import BasicCard from '../../components/Projectcard/projectcard';
import { useNavigate } from 'react-router-dom';

function repeatProjectCard(projectData, skill) {
  const filteredProjects = Array.isArray(projectData)
    ? projectData.filter((project) => project.stack.includes(skill)).slice(0, 3) // Limit to 3 cards
    : [];

  return filteredProjects.map((project) => (
    <BasicCard
      key={project.id}
      userId={project.userId}
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/projects`);
        const data = await response.json();
        setProjectData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching project data:', error);
        setProjectData([]);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold sm:text-4xl">Welcome, {user.displayName}</h1>
            <p className="mt-2 text-md md:text-lg">Discover projects tailored to your skills and interests.</p>
          </div>
          <img
            src={avatarUrl}
            alt="User Avatar"
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 py-10 space-y-8">
        {/* Java Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-7">
            <h2 className="text-xl md:text-2xl font-semibold">Java Projects</h2>
            <button
              onClick={navigateToListings}
              className="px-3 md:px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition text-xs md:text-lg"
            >
              Explore More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {repeatProjectCard(projectData, 'Java')}
          </div>
        </div>

        {/* SQL Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-7">
            <h2 className="text-xl md:text-2xl font-semibold">SQL Projects</h2>
            <button
              onClick={navigateToListings}
              className="px-3 md:px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition text-xs md:text-lg"
            >
              Explore More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {repeatProjectCard(projectData, 'SQL')}
          </div>
        </div>

        {/* Python Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-7">
            <h2 className="text-xl md:text-2xl font-semibold">Python Projects</h2>
            <button
              onClick={navigateToListings}
              className="px-3 md:px-4 py-2 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition text-xs md:text-lgn"
            >
              Explore More
            </button>
          </div>
          <div className="grid grid-cols-1 mmd:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {repeatProjectCard(projectData, 'Python')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
