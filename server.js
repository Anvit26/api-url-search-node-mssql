const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");
const cors = require('cors');

const app = express();
//middleware    
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//routes
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./api').route)
//start server
app.listen(2100, () => console.log('server started at http://localhost:2100'))
