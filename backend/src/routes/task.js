const { Router } = require("express")
const { getUserTasksById, creatTaskForUser, deleteTaskForUser, markTaskDone } = require('../controllers/task_controller')
const { decodeJwt, getLoggedInUser } = require("../middlewares")
const router = Router()

module.exports = taskRouter = app => {
    app.use('/users', router)
    router.get('/:userId/tasks', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            const { userId } = req.params
            const tasks = await getUserTasksById(userId)
            res.status(200).json(tasks)
        } catch (err) {
            next(err)
        }
    })

    router.post('/:userId/tasks', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            const { userId } = req.params
            await creatTaskForUser(userId, req.body)
            res.status(201).end()
        } catch (err) {
            next(err)
        }
    })

    router.patch('/:userId/tasks/:taskId', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            const { userId, taskId } = req.params
            await markTaskDone(userId, taskId)
            res.status(202).end()
        } catch (err) {
            next(err)
        }
    })

    router.delete('/:userId/tasks/:taskId', decodeJwt, getLoggedInUser, async (req, res, next) => {
        try {
            const { userId, taskId } = req.params
            await deleteTaskForUser(userId, taskId)
            res.status(200).end()

        } catch (err) {
            next(err)
        }
    })

}