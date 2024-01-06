import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../App";
const Second = () => {
  const { tasks, setTasks } = useContext(MyContext);
  return (
    <div>
      <div className="box">
        <div className="box3">
          <h1>Tasklar soni: {tasks.length}</h1>
          <h1>Todo app</h1>
        </div>
      </div>
    </div>
  );
};

export default Second;
