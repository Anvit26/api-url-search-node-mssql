const User = require('../db').User
const route = require('express').Router();
//get
route.get('/', (req, res) => {
    User.findAll()
        .then((userinfos) => {
            res.status(200).send(userinfos)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrive User"
            })
        })
})
//UserId
route.get('/UserId/:UserId', (req, res) => {
    let UserId = req.params.UserId;
    console.log(req.params);
    User.findOne({ where: { UserId: req.params } })
        .then((userinfos) => {
            res.status(200).send(userinfos)
            console.log(res)
        })
        .catch((err) => {
            console.log(res)
            res.status(500).send({
                error: "could not retrive User"
            })
        })
});
//Name
route.get('/Name/:Name', (req, res) => {
    let Name = req.params.Name;
    console.log(req.params);
    User.findAll({ where: { Name: req.params } })
        .then((userinfos) => {
            res.status(200).send(userinfos)
        })
        .catch(() => {
            console.log(res)
            res.status(500).send({
                error: "could not retrive User"
            })
        })
});
//Age
route.get('/Age/:Age', (req, res) => {
    let Age = req.params.Age;
    console.log(req.params);
    User.findAll({ where: { Age: req.params } })
        .then((userinfos) => {
            res.status(200).send(userinfos)
        })
        .catch(() => {
            console.log(res)
            res.status(500).send({
                error: "could not retrive User"
            })
        })
});
//Mobile
route.get('/Mobile/:Mobile', (req, res) => {
    let Mobile = req.params.Mobile;
    console.log(req.params);
    User.findAll({ where: { Mobile: req.params } })
        .then((userinfos) => {
            res.status(200).send(userinfos)
        })
        .catch(() => {
            console.log(res)
            res.status(500).send({
                error: "could not retrive User"
            })
        })
});
//Post
route.post('/post', (req, res) => {
    User.create({
        Name: req.body.Name,
        Mobile: req.body.Mobile,
        Age: req.body.Age
    }).then((userinfos) => {
        res.status(201).send(userinfos)
    }).catch((error) => {
        res.status(501).send({
            error: "error adding user"
        }).catch((error) => {
            res.status(400).send({
                error: "user alrady exist"
            })
        })
    })
})
//query
//route.get('/', (req, res) => {
//    var qp = req.query;
//    res.json(qp);
//});
exports = module.exports = route