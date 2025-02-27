import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Task Manager</h1>
      <p className="text-lg text-gray-700 mb-4">
        Organize your tasks efficiently with our simple task management tool.
      </p>
      {user ? (
        <Link
          to="/dashboard"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go to Dashboard
        </Link>
      ) : (
        <Link
          to="/login"
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Login to Get Started
        </Link>
      )}
    </div>
  );
};

export default Home;
