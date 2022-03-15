const userModel = require('../models/user')
const getUserTasksById = async id => await userModel.findById(id, { _id: 0, tasks: 1 }).sort({ done: 0 })
const creatTaskForUser = async (id, task) => await userModel.updateOne({ _id: id }, { $push: { tasks: task } })
const deleteTaskForUser = async (id, taskId) => await userModel.updateOne({ _id: id }, { $pull: { tasks: { _id: taskId } } })
const markTaskDone = async (id, taskId) => await userModel.updateOne({ _id: id, 'tasks._id': taskId }, { $set: { 'tasks.$.done': true } })

module.exports = { getUserTasksById, creatTaskForUser, deleteTaskForUser, markTaskDone }