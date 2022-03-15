const userModel= require('../models/user')

const getUserById = async (id) => await userModel.findById(id)

const createUser = async (data) => await userModel.create(data)

const getUserByEmail = async (userEmail) => await userModel.findOne({ email: userEmail })

module.exports = { getUserById, createUser, getUserByEmail }