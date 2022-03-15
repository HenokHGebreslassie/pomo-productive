const mongoose = require("mongoose")
const TaskSchema = require("./Task")
const User = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    firstName: {
        type: String,
        required: [true, 'first name is required']
    },

    lastName: {
        type: String,
        required: [true, 'first name is required']
    },

    tasks: [TaskSchema]

}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
        }
    }
})

module.exports = mongoose.model('User', User)