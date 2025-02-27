import React from "react";
import TaskColumn from "../TaskColumn/TaskColumn";
//import TaskColumn from "./TaskColumn";

const TaskBoard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <TaskColumn title="To-Do" status="todo" />
      <TaskColumn title="In Progress" status="in-progress" />
      <TaskColumn title="Done" status="done" />
    </div>
  );
};

export default TaskBoard;
