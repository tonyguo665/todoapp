const controls = require('./controller');
const routes = require('express').Router();

routes
.route('/todo')
.get(controls.get)
.post(controls.post)
.delete(controls.delete)
.put(controls.put)

module.exports = routes;