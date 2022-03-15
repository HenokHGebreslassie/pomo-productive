const dotEnvConfig = require('dotenv').config();
const config = {
    dbUri: process.env.MONGODB_URI,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgo: process.env.JWT_ALGORITHM,
    api: { prefix: '/api' }

}
module.exports = config
