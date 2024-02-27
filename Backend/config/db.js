const colors = require("colors");
const mongoose = require("mongoose");

const coneectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.bold);
  } catch (error) {
    console.log(`Eroor: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = coneectDB;
