import React from 'react';
import Navbar from '../../components/Navbar';
import AddIdeaForm from './Ideaform';
import IdeasList from './Idealist';

const ProjectIdeasPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="text-center md:w-full">
            <h1 className="text-4xl font-bold mb-4">Share Your Ideas</h1>
            <p className="text-lg mb-6">
              Have a project idea? Share it with the community and find collaborators to bring it to life!
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-2 py-10 flex flex-col md:flex-col lg:flex-row gap-8">
        {/* Idea Submission Form */}
        <div className="bg-white p-6 mx-auto rounded shadow-lg w-full lg:w-1/3 md:w-2/3 sm:w-full">
          <AddIdeaForm />
        </div>

        {/* Ideas List */}
        <div className="w-full md:w-full lg:w-2/3 mx-auto">
          <IdeasList />
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeasPage;
