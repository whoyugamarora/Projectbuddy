import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ReusableCard = ({ avatarSeed, title, author, description, votes, createdAt, onUpvote }) => {
  return (
    <li
      className="bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 p-6 relative"
    >
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <img
          src={`https://api.dicebear.com/5.x/micah/svg?seed=${avatarSeed}`}
          alt="User Avatar"
          className="w-12 h-12 rounded-full shadow-md border-2 border-indigo-500"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">by {author}</p>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Metadata Section */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <p>
          <span className="font-semibold text-gray-800">{votes}</span> Votes
        </p>
        <p>{new Date(createdAt).toLocaleDateString()}</p>
      </div>

      {/* Upvote Button */}
      <button
        onClick={onUpvote}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>Upvote</span>
      </button>

      {/* Decorative Circle */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-lg"></div>
    </li>
  );
};

export default ReusableCard;
