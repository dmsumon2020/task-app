import React from "react";
import TaskList from "../TaskList/TaskList";
//import TaskList from "./TaskList";

const TaskColumn = ({ title, status }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <TaskList status={status} />
    </div>
  );
};

export default TaskColumn;
