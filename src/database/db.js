const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Connecting...");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.avexrob.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("mongo DB connected!"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
