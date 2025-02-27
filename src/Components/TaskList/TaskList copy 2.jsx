import React from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import TaskItem from "../TaskItem/TaskItem";
import toast from "react-hot-toast";

const fetchTasks = async (userId, category) => {
  const { data } = await axios.get(
    `http://localhost:5000/tasks/category/${category}?userId=${userId}`
  );
  return data;
};

const TaskList = ({ status }) => {
  const { user } = useAuth();

  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", user?.uid, status],
    queryFn: () => fetchTasks(user?.uid, status),
    enabled: !!user,
  });

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${taskId}`, {
        status: newStatus,
      });
      QueryClient.invalidateQueries(["tasks"]);
    } catch (error) {
      toast.error("Failed to update task status");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;

  return (
    <div className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))
      ) : (
        <p className="text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
