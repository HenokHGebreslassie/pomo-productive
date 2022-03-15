const jwt = require('express-jwt')

const config = require('../constants/config')

const getTokenFromHeader = req => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
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