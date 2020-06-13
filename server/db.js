const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/juniorpractice");

let todoListSchema = mongoose.Schema({
  todoName: String,
  todoDescription: String,
  finished: Boolean
});

let Todo = mongoose.model("Todo", todoListSchema);

module.exports = {
    get: () =>{
      return Todo.find().exec()
    },
    post: todo =>{
      return new Todo({
        todoName: todo.todoName,
        todoDescription: todo.todoDescription,
        finished: false
      }).save()
    },
    delete: todo =>{
      return Todo.deleteOne({todoName:todo.todoName}).exec()
    },
    put: todo =>{
      let query = {
        todoName:todo.todoName
      }
      let update = {
        [todo.target]:todo.value
      }
      return Todo.findOneAndUpdate(query,update).exec()
    }
}

