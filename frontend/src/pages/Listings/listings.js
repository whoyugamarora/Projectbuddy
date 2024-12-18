import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/index';
import BasicCard from '../../components/Projectcard/projectcard';
import BasicCardSkeleton from '../../components/Projectcard/BasicCardSkeleton';

const Listings = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/projects`);
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        }
        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    ProjectBuddy Listings
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading
                        ? // Show skeleton loader while loading
                        Array(3)
                            .fill(0)
                            .map((_, index) => <BasicCardSkeleton key={index} />)
                    :
                    projects.map((project) => (
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
                            ))}
                </div>
            </div>
        </div>
    );
};

export default Listings;
