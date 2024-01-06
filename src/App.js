import React, { useState } from "react";
import { createContext } from "react";
import Second from "./component/Second";
import "./component/first.css";
import Last from "./component/Last";
export const MyContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([
    { title: "Task" },
    { title: "Task" },
    { title: "Task" },
  ]);
  return (
    <MyContext.Provider value={{ tasks, setTasks }}>
      <div className="box">
        <Second />
        <Last />
        <div className="box3">
          {tasks.map((item) => {
            return (
              <div className="box2">
                <input type="checkbox" />
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
