
const path = require('path')
const express = require('express')
const pug = require('ejs')
const bodyParser = require('body-parser')
const SERVERCONFIG= require(path.join(__dirname, 'server/server-config'))
const ROUTESINDEX = require(path.join(__dirname, 'server/routes/index'))

var server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'client/build'))
server.use(express.static(path.join(__dirname, 'client/build/static')))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use('/', ROUTESINDEX)


server.listen(SERVERCONFIG.PORT)
console.log(`Server started on port: ${SERVERCONFIG.PORT}`)
