const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nitishk:4S2oZiXaOb1hRVaK@namastenode.ta6r2.mongodb.net/DevTinder"
  );
};

module.exports = connectDB;
