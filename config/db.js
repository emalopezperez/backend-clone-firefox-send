const mongoose = require("mongoose");
require("dotenv").config({path:".env"});

const dbConnect = () => {
  const DB_URl = process.env.DB_URl;

  mongoose.connect(DB_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("conexión exitosa");
  })
  .catch((err) => {
    console.log("error de conexión: " + err);
  });
};

module.exports = dbConnect;
