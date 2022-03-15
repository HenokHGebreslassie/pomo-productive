const jwt = require('jsonwebtoken')
const { randomBytes } = require('crypto')
const argon2 = require('argon2')

const { createUser, getUserByEmail } = require('./user_controller.js')
const config = require('../constants/config')

const generateAccessToken = user => {
    return jwt.sign({ id: user.id, name: user.firstName }, config.jwtSecret, { expiresIn: '1d' })
}

const signUp = async (data) => {
    try {
        console.log(data)
        const salt = randomBytes(64);
        const hashedPwd = await argon2.hash(data.password, { salt: salt })
        data = { ...data, password: hashedPwd }
        const newUser = await createUser(data)
        const accessToken = generateAccessToken(newUser)
        if (!newUser) {
            throw new Error(`user can't be created`)
        }
        return { newUser, accessToken };

    } catch (err) {
        throw err
    }
}

const signIn = async (data) => {
    const user = await getUserByEmail(data.email)
    if (user) {
        const validPassoword = await argon2.verify(user.password, data.password)
        if (validPassoword) {
            const accessToken = generateAccessToken(user);
            return { user, accessToken }
        } else {
            throw new Error('invalid email & password combination')
        }
    }
    else {
        throw new Error('invalid email & password combination')

    }
}

const checkEmailExist = async email => {
    const user = await getUserByEmail(email)
    return Boolean(user)
}

module.exports = { signUp, signIn, checkEmailExist }

