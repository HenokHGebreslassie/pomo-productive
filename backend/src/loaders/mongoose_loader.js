const mongoose = require('mongoose')
const config = require('../constants/config')

module.exports = connectToMongoose  = async _ => {
    const client = await mongoose.connect(config.dbUri, {useUnifiedTopology : true, useNewUrlParser : true, useCreateIndex : true})
    return client.connection.db
}


