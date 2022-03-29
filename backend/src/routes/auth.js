const { Router } = require("express")
const { signIn, signUp, checkEmailExist } = require("../controllers/auth_controller")

const route = Router();

module.exports = authRouter = app => {
    app.use('/auth', route)

    route.post('/signin', async (req, res, next) => {
        try {
            const { user, accessToken } = await signIn(req.body)
            res.status(200).json({ user, accessToken })
        } catch (err) {
            next(err)
        }
    })

    route.post('/signup', async (req, res, next) => {
        try {
            console.log(req.body)
            const { newUser, accessToken } = await signUp(req.body)
            res.status(200).json({ user: newUser, accessToken: accessToken })
        } catch (err) {
            next(err)
        }
    })
    route.get('/checkEmailExists', async (req, res, next) => {
        try {
            const { email } = req.query;
            const emailUsed = await checkEmailExist(email)
            res.status(200).json({ success: true, data: { emailExists: emailUsed } })
        } catch (err) {
            next(err)
        }
    })

}

