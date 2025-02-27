import React from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import TaskItem from "../TaskItem/TaskItem";
import { toast } from "react-hot-toast";

const fetchTasks = async (userId, category) => {
  const { data } = await axios.get(
    `http://localhost:5000/tasks/category/${category}?userId=${userId}`
  );
  return data;
};

const TaskList = ({ status }) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", user?.uid, status],
    queryFn: () => fetchTasks(user?.uid, status),
    enabled: !!user,
  });

  const updateTaskStatus = useMutation({
    mutationFn: async ({ taskId, newStatus }) => {
      await axios.put(`http://localhost:5000/tasks/${taskId}`, {
        status: newStatus,
      });
    },
    onSuccess: () => {
      toast.success("Task status updated");
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: (error) => {
      console.error("Error updating task status:", error);
      toast.error("Failed to update task status");
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;

  return (
    <div className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            updateTaskStatus={updateTaskStatus.mutate}
          />
        ))
      ) : (
        <p className="text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
