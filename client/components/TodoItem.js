import React, {useState} from "react";
import axios from "axios";

const TodoItem = ({ todo,changeTodo }) => {

  let [todoName, setTodoName] = useState("");
  let [todoDescription,setTodoDescription] = useState("");
  let [completed,setCompleted] = useState(todo.finished);

  const submitNameChange = () =>{
    axios.put("/todo",{
      todoName: todo.todoName,
      target: "todoName",
      value:todoName
    })
    .then(()=>{
      return axios.get("/todo")
    })
    .then(({data})=>{
      setTodoName("");
      changeTodo(data);
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  const submitDescriptionChange = () =>{
    axios.put("/todo",{
      todoName: todo.todoName,
      target: "todoDescription",
      value:todoDescription
    })
    .then(()=>{
      return axios.get("/todo")
    })
    .then(({data})=>{
      setTodoDescription("");
      changeTodo(data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const deleteItem = () =>{
    axios.delete("/todo",{params:{
      todoName:todo.todoName
    }})
    .then(()=>{
      return axios.get("/todo")
    })
    .then(({data})=>{
      changeTodo(data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      {completed ? null : (
        <div
          className="container"
          style={{ border: "1px solid black", width: "150px", paddingLeft: "10px" }}
        >
          <p>{todo.todoName}</p>
          <input value={todoName} placeholder="Change Todo Name" onChange={(e) =>{
            setTodoName(e.target.value);
          }}/>
          <p onClick={submitNameChange}>Send Name Changes</p>
          <p>{todo.todoDescription}</p>
          <input value={todoDescription} placeholder="Change Todo Description" onChange={(e) =>{
            setTodoDescription(e.target.value);
          }}/>
          <p onClick={submitDescriptionChange}>Send Description Changes</p>
          <p onClick={()=>{setCompleted(!completed)}}>Completed: {String(todo.finished)}</p>
          <p onClick={deleteItem}>Delete</p>
        </div>
      )}
    </>
  );
};

export default TodoItem;
