const { Router } = require("express")
const authRouter  = require('./auth')
const taskRouter = require('./task')
module.exports =  routes = _ => {

    const app = Router()

    authRouter(app)

    taskRouter(app)

    return app
}