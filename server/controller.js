const models = require("./model");

module.exports = {
  get: (req, res) => {
    models.get()
    .then((data) =>{
      res.send(data)
    })
    .catch((err)=>{
      console.log(err)
      res.sendStatus(500)
    })
  },
 
  post: (req, res) => {
    let todo = req.body;
    models.post(todo)
    .then(() =>{
      res.sendStatus(202)
    })
    .catch((err)=>{
      console.log(err)
      res.sendStatus(500)
    })
  },

  delete: (req, res) => {
    let todo = req.query;
    models.delete(todo)
    .then(() =>{
      res.sendStatus(202)
    })
    .catch((err)=>{
      console.log(err)
      res.sendStatus(500)
    })
  },
  put: (req, res) =>{
    let todo = req.body
    models.put(todo)
    .then(() =>{
      res.sendStatus(202)
    })
    .catch((err)=>{
      console.log(err)
      res.sendStatus(500)
    })
  }
};
