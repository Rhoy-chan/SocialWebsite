import "./App.css";
import { useState } from "react";

function Sample() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  console.log(todoList);
  return (
    <div className="Sample">
      <div className="addTask">
        {newTask}
        <input onChange={handleChange} />
        <button onClick={addTask}>Add addTask</button>
      </div>
      <div className="list">
        {todoList.map((task) => {return <h1>{task}</h1>}) }
      </div>
      <div> </div>
    </div>
  );
}

// const User = (meow) => {
//   return (
//     <div>
//       <h1>{meow.name}</h1>
//       <h1>{meow.age}</h1>
//       <h1>{meow.email}</h1>
//     </div>
//   );
// };

export default Sample;
