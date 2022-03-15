const { getUserById }  = require("../controllers/user_controller")

module.exports = getLoggedInUser = async (req, res, next) => {
    try {
        let user = await getUserById(req.accessToken.id)
        if (!user) {
            return res.status(401).json({ errors: 'Not Authorized' })
        }
        console.log(user)
        user = user.toObject();
        Reflect.deleteProperty(user, 'password')
        req.user = {
            userId: user._id.toString(),
            name: user.firstName
        }
        next()
    } catch (err) {
        next(err)
    }

}