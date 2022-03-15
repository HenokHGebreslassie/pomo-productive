const loadExpress  = require('./express_loader')
const  connectToMongoose = require('./mongoose_loader')

module.exports = appLoader = async (app) => {
    const mongooseConnection = await connectToMongoose()
    loadExpress(app)
}