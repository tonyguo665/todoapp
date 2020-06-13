import React from "react";
import TodoItem from "./TodoItem"

const TodoList = ({todoList, changeTodo}) => {
  return(
    <div className="container">
      {todoList.map((todo,i)=> (<TodoItem key={i} todo={todo}changeTodo={changeTodo}/>
      ))}
    </div>
  );
};

export default TodoList;