const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors())
// const mysql = require('./config/database').connect

app.use(express.json());


// import all routes
const cycle = require('./routes/cycle.routes');
app.use('/api/v1',
        cycle);


module.exports = app;