
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://uservikki:vikki@cluster0.brbuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

module.exports = connect;
