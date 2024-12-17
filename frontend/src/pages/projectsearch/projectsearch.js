import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import BasicCard from '../../components/Projectcard/projectcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function ProjectSearchPage() {
    const [query, setQuery] = useState('');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProjects = async (searchQuery) => {
        try {
            setLoading(true);
            setError('');
            const response = await fetch(`${process.env.REACT_APP_API_URL}/projects/search?query=${searchQuery}`);
            if (!response.ok) throw new Error('Failed to fetch projects.');
            const data = await response.json();
            setProjects(data);
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (query.trim()) {
            fetchProjects(query);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Search Container */}
            <div className="flex flex-col items-center px-4 py-8 mt-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                    Discover Projects
                </h1>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row w-full max-w-3xl items-center gap-4 mb-8">
                    <input
                        className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        type="text"
                        placeholder="Search by title, author, or stack"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3  rounded-md hover:bg-blue-700 transition"
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        Search
                    </button>
                </div>

                {/* Loading State */}
                {loading && (
                    <p className="text-gray-500 text-lg">Loading projects...</p>
                )}

                {/* Error State */}
                {error && (
                    <p className="text-red-500 text-lg">{error}</p>
                )}

                {/* Project List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-3 max-w-7xl">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <BasicCard
                                key={project.id || project._id}
                                userId={project.userId}
                                project={project}
                                title={project.title}
                                subheader={project.author}
                                description={project.description}
                                stack={project.stack}
                                email={project.email}
                            />
                        ))
                    ) : (
                        !loading && (
                            <p className="text-gray-500 col-span-full text-center">
                                No projects found. Try refining your search!
                            </p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectSearchPage;
