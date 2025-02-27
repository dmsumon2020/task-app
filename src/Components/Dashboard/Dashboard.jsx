import React from "react";
//import { useAuth } from "../context/AuthContext";
//import TaskBoard from "../components/TaskBoard";
import { useAuth } from "../../Context/AuthContext";
import TaskBoard from "../TaskBoard/TaskBoard";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <div className="flex items-center gap-4">
          <span className="text-lg">{user?.displayName}</span>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
      <TaskBoard />
      <div className="mt-6">
        <AddTaskForm />
      </div>
    </div>
  );
};

export default Dashboard;
