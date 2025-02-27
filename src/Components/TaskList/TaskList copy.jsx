import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//import TaskItem from "./TaskItem";
import { useAuth } from "../../Context/AuthContext";
import TaskItem from "../TaskItem/TaskItem";
//import { useAuth } from "../context/AuthContext";

const fetchTasks = async (userId, status) => {
  const { data } = await axios.get(
    `http://localhost:5000/tasks?userId=${userId}&status=${status}`
  );
  return data;
};

const TaskList = ({ status }) => {
  const { user } = useAuth();
  console.log(user?.uid);

  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", user?.uid, status],
    queryFn: () => fetchTasks(user?.uid, status),
    enabled: !!user,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;

  return (
    <div className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task._id} task={task} />)
      ) : (
        <p className="text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
