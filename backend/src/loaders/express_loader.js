const express = require('express')
const helmet = require('helmet')
const cors  = require('cors')
const morgan = require('morgan')

const fs = require('fs')
const path = require('path')

const config   = require('../constants/config')
const routes = require('../routes')

const accessLogStream = fs.createWriteStream(path.join(__dirname, '../../.access.log'), { flags: 'a' })
module.exports = loadExpress = (app) => {
    app.get('/status', (req, res) => {
        res.status(200).end()
    })

    app.use(helmet())

    app.use(cors())

    app.use(morgan('combined', { stream: accessLogStream }) )

    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    app.use(config.api.prefix, routes())

    app.use((err, req, res, next) => {
        console.log(err)
        next(err);
    })

    app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.json({ errors: { message: err.message } })
    })





}
