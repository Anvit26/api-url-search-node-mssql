const express = require('express');
const route = require('express').Router();
const user = require('./user');

route.use("/user", require("./user"));

exports = module.exports = {
    route
}