import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export default function BasicCard({
  title = "Project Title",
  subheader = "John Doe",
  description = "This is a stunning project card that feels unique, modern, and visually engaging.",
  stack = ["React", "Tailwind", "Firebase"],
  email = "user@example.com",
  userId = "1",
  currentUserEmail,
  project,
  onDelete
}) {
  const [hovered, setHovered] = useState(false);

  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(
    email || 'User'
  )}&backgroundColor=f3f4f6,e5e7eb`;

  return (
    <div
      className={`relative w-96 rounded-3xl p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${
        hovered ? 'transform -translate-y-3' : ''
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating Gradient Circle */}
      <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Header Section */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="w-14 h-14 rounded-full border-2 border-indigo-500 shadow-sm"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">by {subheader}</p>
        </div>
      </div>

      {/* Content Section */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="text-sm mb-4">
        <span className="font-semibold text-gray-700">Tech Stack: </span>
        <span className="text-indigo-800 font-medium">
          {Array.isArray(stack) ? stack.join(', ') : stack}
        </span> 
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <Link to={`/profile/${userId}`}>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300">
            Connect
          </button>
        </Link>

        {currentUserEmail === email && (
          <button
            onClick={() => onDelete?.(project?.id || project?._id || '')}
            className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-all duration-300"
          >
            <DeleteIcon fontSize="small" />
          </button>
        )}
      </div>
    </div>
  );
}
