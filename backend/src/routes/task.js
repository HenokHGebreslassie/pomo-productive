const { Router } = require("express")
const { getUserTasksById, creatTaskForUser, deleteTaskForUser, markTaskDone } = require('../controllers/task_controller')
const { decodeJwt, getLoggedInUser } = require("../middlewares")
const router = Router()

module.exports = taskRouter = app => {
    app.use(router)
    router.get('/tasks', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            const tasks = await getUserTasksById(req.user.id)
            res.status(200).json(tasks)
        } catch (err) {
            next(err)
        }
    })

    router.post('/tasks', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            await creatTaskForUser(req.user.id, req.body)
            res.status(201).end()
        } catch (err) {
            next(err)
        }
    })

    router.patch('/tasks/:taskId', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            const {  taskId } = req.params
            await markTaskDone(req.user.id, taskId)
            res.status(202).end()
        } catch (err) {
            next(err)
        }
    })

    router.delete('/tasks/:taskId', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            const { taskId } = req.params
            await deleteTaskForUser(req.user.id, taskId)
            res.status(200).end()

        } catch (err) {
            next(err)
        }
    })

}