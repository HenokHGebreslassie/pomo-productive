const mongoose = require("mongoose")
module.exports = TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Task title is required']
    },
    projectName: {
        type: String,
    },
    pomodros: {
        type: Number,
        required: [true, 'pomodros is required']
    },
    done: {
        type: Boolean
    }
}, { _id: true })