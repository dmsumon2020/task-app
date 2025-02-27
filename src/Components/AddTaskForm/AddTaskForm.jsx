import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";
//import { useAuth } from "../context/AuthContext";

const AddTaskForm = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  const addTask = useMutation({
    mutationFn: async (newTask) => {
      await axios.post(
        "https://task-server-peach-ten.vercel.app/tasks",
        newTask
      );
    },
    onSuccess: () => {
      toast.success("Task added!");
      queryClient.invalidateQueries(["tasks"]);
      setTaskData({ title: "", description: "", status: "todo" });
    },
    onError: () => {
      toast.error("Failed to add task");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskData.title.trim() || !taskData.description.trim()) {
      toast.error("Please fill out all fields");
      return;
    }
    addTask.mutate({ ...taskData, userId: user.uid });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md space-y-3"
    >
      <input
        type="text"
        placeholder="Task Title"
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      <textarea
        placeholder="Task Description"
        value={taskData.description}
        onChange={(e) =>
          setTaskData({ ...taskData, description: e.target.value })
        }
        className="w-full px-3 py-2 border rounded-md"
      />
      <select
        value={taskData.status}
        onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      >
        <option value="todo">To-Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
