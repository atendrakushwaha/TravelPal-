import React, { useState } from 'react';
import Signup from './Signup';

const LoginPage = ({ onSignup }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form>
          <div className="mb-4 text-left">
            <label htmlFor="username" className="block text-sm text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-700">
          Don't have an account?{" "}
          <span onClick={onSignup} className="text-green-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleStartPlanning = () => {
    setShowSignup(true);
  };

  const handleGoToLogin = () => {
    setShowSignup(false);
  };

  return (
    <div>
      {showSignup ? <Signup onLogin={handleGoToLogin} /> : <LoginPage onSignup={handleStartPlanning} />}
    </div>
  );
};

export default Login;
