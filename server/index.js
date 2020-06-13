// Initialize the server
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./route');

//use the middleware/serve the client files
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//routing logic
app.use('/',router);

app.use(express.static('./client/dist'));


//open up the gates! on port 3000 tho
app.listen(port, () => console.log(`App listening on port ${port}!`))