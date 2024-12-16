import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import BasicCard from '../../components/Projectcard/projectcard';
import './projectsearch.css';

function ProjectSearchPage() {
    const [query, setQuery] = useState('');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProjects = async (searchQuery) => {
        try {
            setLoading(true);
            setError('');
            const response = await fetch(`http://localhost:5000/projects/search?query=${searchQuery}`);
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
        <div className="wrapper">
            <Navbar />
            <div className="project-search-container">
                <h1 className="project-search-header">Discover Projects</h1>
                <div className="search-bar-container">
                    <input
                        className="search-bar-input"
                        type="text"
                        placeholder="Search by title, author, or stack"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="search-bar-button" onClick={handleSearch}>
                        <i className="fas fa-search"></i> Search
                    </button>
                </div>
                {loading && <p className="loading-message">Loading projects...</p>}
                {error && <p className="error-message">{error}</p>}
                <div className="project-list">
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
                        !loading && <p className="no-projects-message">No projects found. Try refining your search!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectSearchPage;
