const jwt = require('express-jwt')

const config = require('../constants/config')

const getTokenFromHeader = req => {
    console.log(`request is ${req.headers.authorization}`)
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        console.log(req.headers.authorization.split('')[0])
        return req.headers.authorization.split(' ')[1]
    }
    return null;
}

module.exports = decodeJwt = jwt({
    secret: config.jwtSecret,
    algorithms: [config.jwtAlgo],
    userProperty: 'accessToken',
    getToken: getTokenFromHeader
})