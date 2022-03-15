const express =  require('express')
const config =  require('./constants/config')
const appLoader = require('./loaders')

const app = express()

appLoader(app)

app.listen(config.port, _ => console.log(`Server started listening on port ${config.port}`))



