const mongoose = require("mongoose");

// mongodb://localhost:27017/
// "mongodb+srv://nitishk:4S2oZiXaOb1hRVaK@namastenode.ta6r2.mongodb.net/DevTinder

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/DevTinder"
  );
};

module.exports = connectDB;
