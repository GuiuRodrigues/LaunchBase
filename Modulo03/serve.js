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
    const index = {
        image_logo: "https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg",
        name: "Rocketseat",
        link_name: "https://rocketseat.com.br/",
        description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo. No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        description_techs: "Principais Cursos Ofertados",
        techs: [

            { name: "Node.js" },
            { name: "React.js" },
            { name: "JavaScript" },
        ],
    }

    return res.render("index", { index })
})

server.get('/sobre', function(req, res) {
    const sobre = {

        image_logo: "https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg",
        name: "Rocketseat",
        link_name: "https://rocketseat.com.br/",
        inicio: "Nossas atividades começaram em 2010",
        description: "Principais Cursos Ofertados",
        cursos: [

            { name: "Starter - Totalmente Gratuito" },
            { name: "Lauch Base - Pago" },
            { name: "Go Stack - Pago" },
        ],

    }

    return res.render("sobre", { sobre })
})

server.get('/conteudos', function(req, res) {
    return res.render("conteudos", { items: content })
})

server.use(function(req, res) {
    const error = {
        image_error: "https://image.freepik.com/vetores-gratis/glitch-error-404-page-background_23-2148072533.jpg"
    }

    res.status(404).render("not-foud", { error })
})

server.listen(4000, function() {
    console.log("server is running")
})