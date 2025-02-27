import React from "react";
import { useDrop } from "react-dnd";
import TaskList from "../TaskList/TaskList";
import { ItemTypes } from "../../constants/ItemTypes";

const TaskColumn = ({ title, status }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => {
      // Call function to update task status
      item.updateTaskStatus({ taskId: item.id, newStatus: status });
    },
  });

  return (
    <div ref={drop} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <TaskList status={status} />
    </div>
  );
};

export default TaskColumn;
