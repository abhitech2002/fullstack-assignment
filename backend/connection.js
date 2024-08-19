require("dotenv").config();
const mongoose = require("mongoose");

const connectionStr = process.env.MONGODB_URI
mongoose.set("strictQuery", true);

const Connection = mongoose.connect(connectionStr)    
  .then(() => {
    console.log("Connected to MongoDB!");
    return true
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = Connection; 
