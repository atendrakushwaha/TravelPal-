import React from 'react';

const SignUp = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form>
          <div className="mb-4 text-left">
            <label htmlFor="username" className="block text-sm text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-700">
          Already have an account? <button onClick={onLogin} className="text-blue-500 hover:underline">Log in</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
