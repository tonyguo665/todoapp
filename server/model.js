const db = require("./db");

module.exports = {
  get: () => {
    return db.get()
  },

  post: todo => {
    return db.post(todo)
    /*
    todo should be {
      todoName
      todoDescription
    }
    */
  },

  delete: todo => {
    return db.delete(todo)

    /*
    todo should be {
      todoName
    }
    */
  },
  put: todo =>{
    return db.put(todo)
    /*
    todo should be {
      todoName
      target
      value
    }
    */
  }
};
