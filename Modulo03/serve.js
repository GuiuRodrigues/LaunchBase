const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const content = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {
    return res.render("index")
})

server.get('/conteudos', function(req, res) {
    return res.render("conteudos")
})
server.get('/sobre', function(req, res) {
    return res.render("sobre")
})
server.use(function(req, res) {
    res.status(404).render("not-foud")
})

server.listen(4000, function() {
    console.log("server is running")
})