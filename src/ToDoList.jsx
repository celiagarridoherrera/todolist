import React, { useState } from "react";
function ToDoList() {

    const [toDo, setToDo] = useState([]);
    const [task, setTask] = useState("");

    function handleInputChange(event){
        setTask(event.target.value);

    }
    function addTask() {

      if (task.trim() !== "") {
        setToDo(t => [...toDo, task]);
        setTask("");
      }
    }

    function deleteTask(index) {
        const updatedToDo = toDo.filter((task, i) => i !== index);
        setToDo(updatedToDo);


    }

    function moveTaskup (index) {
        if (index > 0) {
        const updatedToDo = [...toDo];
        [updatedToDo[index], updatedToDo[index - 1]] = [updatedToDo[index - 1], updatedToDo[index]];
        setToDo(updatedToDo);
    }
    }


    function moveTaskdown (index) {
        if (index < toDo.length - 1) {
            const updatedToDo = [...toDo];
            [updatedToDo[index], updatedToDo[index + 1]] = [updatedToDo[index + 1], updatedToDo[index]];
            setToDo(updatedToDo);
        
    }
    }


    return(
        <div className="toDoList">
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task} 
                    onChange={handleInputChange}
                />
                <button className="add" onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {toDo.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="up" onClick={() => moveTaskup(index)}>
                            🆙
                        </button>
                        <button className="down" onClick={() => moveTaskdown(index)}>
                            ⬇️
                        </button>
                    </li>)}
            </ol>
        </div>
    )
}
export default ToDoList;