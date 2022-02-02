module.exports.CLIENT_URL = "http://127.0.0.1:3000"
module.exports.SERVER_URL = "http://127.0.0.1:4000"
module.exports.MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
