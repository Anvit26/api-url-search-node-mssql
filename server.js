const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");

const app = express();
//middleware    
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//routes
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./api').route)
//start server
app.listen(2100, () => console.log('server started at http://localhost:2100'))