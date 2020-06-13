import React from "react";
import axios from "axios";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
      todoDescription: "",
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      todoName: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      todoDescription: e.target.value,
    });
  }

  submitClick() {
    axios
      .post("/todo", this.state)
      .then(() => {
        return axios.get("/todo");
      })
      .then(({ data }) => {
        this.props.changeTodo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.todoName}
          placeholder="Todo Name"
          onChange={this.handleNameChange}
        />
        <input
          type="textarea"
          value={this.state.todoDescription}
          placeholder="Todo Description"
          onChange={this.handleDescriptionChange}
        />
        <button onClick={this.submitClick}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
