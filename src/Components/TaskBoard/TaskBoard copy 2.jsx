import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "../TaskColumn/TaskColumn";

const TaskBoard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-3 gap-4">
        <TaskColumn title="To-Do" status="todo" />
        <TaskColumn title="In Progress" status="in-progress" />
        <TaskColumn title="Done" status="done" />
      </div>
    </DndProvider>
  );
};

export default TaskBoard;
