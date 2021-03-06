const User = require('../db').User
const route = require('express').Router();
//get
route.get('/', (req, res) => {
    User.findAll()
        .then((userinfos) => {
            res.status(200).send(userinfos  )
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrive User"
            })
        })
})
//UserId
route.get('/UserId/:UserId', (req, res) => {
    User.findAll({ where: { UserId: req.params.UserId } })
        .then((userinfos) => {
            res.status(200).send(userinfos)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrive User"
            })
        })
})
//Name
route.get('/Name/:Name', (req, res) => {
    User.findAll({ where: { Name: req.params.Name } })
        .then((userinfos) => {
            res.status(200).send(userinfos)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrive User"
            })
        })
})
//Age
route.get('/Age/:Age', (req, res) => {
        User.findAll({ where: { Age: req.params.Age} })
            .then((userinfos) => {
                res.status(200).send(userinfos)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "could not retrive User"
                })
            })
    })
//Mobile
route.get('/Mobile/:Mobile', (req, res) => {
    User.findAll({ where: { Mobile: req.params.Mobile } })
        .then((userinfos) => {
            res.status(200).send(userinfos)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrive User"
            })
        })
})
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

/*
 //err
 route.get('/UserId/:UserId', (req, res) => {

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
});*/

exports = module.exports = route
