import React from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const TaskItem = ({ task }) => {
  const queryClient = useQueryClient();

  const deleteTask = useMutation({
    mutationFn: async () => {
      await axios.delete(`http://localhost:5000/tasks/${task._id}`);
    },
    onSuccess: () => {
      toast.success("Task deleted");
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: () => {
      toast.error("Failed to delete task");
    },
  });

  return (
    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center shadow">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <button
        onClick={() => deleteTask.mutate()}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
