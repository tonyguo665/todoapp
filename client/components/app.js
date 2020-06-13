import React from "react";
import axios from "axios"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todoList:[]
    };

    this.changeTodo = this.changeTodo.bind(this);
  }


  componentDidMount() {
    axios.get("/todo")
    .then(({data}) =>{
      this.setState({
        todoList:data
      })
    })
  }

  changeTodo(todo){
    this.setState({
      todoList:todo
    })
  }

  render() {
    return(
    <div className="container">
      <TodoForm changeTodo={this.changeTodo}/>
      <TodoList todoList={this.state.todoList} changeTodo={this.changeTodo}/>
    </div>
    )};
};

export default App;
