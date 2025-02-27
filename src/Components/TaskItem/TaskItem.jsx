import React, { useState } from "react";
import { useDrag } from "react-dnd";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { ItemTypes } from "../../constants/ItemTypes";

const TaskItem = ({ task, updateTaskStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const queryClient = useQueryClient();

  const deleteTask = useMutation({
    mutationFn: async () => {
      await axios.delete(
        `https://task-server-peach-ten.vercel.app/tasks/${task._id}`
      );
    },
    onSuccess: () => {
      toast.success("Task deleted");
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: () => {
      toast.error("Failed to delete task");
    },
  });

  const updateTask = useMutation({
    mutationFn: async () => {
      await axios.put(
        `https://task-server-peach-ten.vercel.app/tasks/${task._id}`,
        {
          title: editedTitle,
          description: editedDescription,
          status: task.status, // Include status in the update request
        }
      );
    },
    onSuccess: () => {
      toast.success("Task updated");
      queryClient.invalidateQueries(["tasks"]);
      setIsEditing(false);
    },
    onError: () => {
      toast.error("Failed to update task");
    },
  });

  const [, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task._id, updateTaskStatus },
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    updateTask.mutate();
  };

  return (
    <div
      ref={drag}
      className="bg-gray-100 p-3 rounded-md flex justify-between items-center shadow"
    >
      {isEditing ? (
        <div className="flex-grow">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="mt-2 flex justify-end gap-2">
            <button
              onClick={handleCancelClick}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveClick}
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleEditClick}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask.mutate()}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
