import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../App";

const Last = () => {
  const { tasks, setTasks } = useContext(MyContext);
  const [words, setWords] = useState("");

  const addTasks = (e) => {
    e.preventDefault()
    let payload = {
      title: words,
    };
    setTasks([...tasks, { ...payload }]);
  };

  return (
    <div className="box">
      <div className="box3">
        <span>
          <form onSubmit={addTasks} id="form">
            <input
              type="text"
              onChange={(e) => setWords(e.target.value)}
              placeholder="Enter your word"
            />
          </form>
          <button type="submit" form="form">Add</button>
        </span>
      </div>
    </div>
  );
};

export default Last;
