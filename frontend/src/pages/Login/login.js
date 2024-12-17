import React, { useState } from "react";
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../firebase";
import { useNavigate } from "react-router-dom"; // For navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Login Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6">Sign in to continue</p>
          <form className="space-y-4 w-full">
            <div>
              <label htmlFor="loginEmail" className="block text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="loginPassword" className="block text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-3">
              <button
                type="button"
                onClick={() => signInWithEmailAndPassword(loginEmail, loginPassword)}
                className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Login
              </button>
              <button
                type="button"
                onClick={signInWithGoogle}
                className="w-full bg-gray-100 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                <FontAwesomeIcon icon={faGoogle} size="md" /><span className="mx-2">Sign in with Google</span>
              </button>
            </div>
          </form>
        </div>

        {/* Registration Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6">Join ProjectBuddy</p>
          <form className="space-y-4 w-full">
            <div>
              <label htmlFor="registerName" className="block text-gray-600 font-medium">
                Name
              </label>
              <input
                type="text"
                id="registerName"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="registerEmail" className="block text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                id="registerEmail"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="registerPassword" className="block text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                id="registerPassword"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => registerWithEmailAndPassword(name, email, password)}
              className=" w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="my-10">
        <button
          onClick={() => navigate("/")}
          className="text-indigo-600 font-medium py-2 px-6 rounded-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;
