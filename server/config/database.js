require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URL } = require("./globals");

console.log(MONGO_URL);

mongoose
  .connect(MONGO_URL, {
    // keepAlive: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful."))
  .catch(console.error);

module.exports = mongoose.connection;
