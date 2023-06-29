const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/vuelo",);

const conexion = mongoose.connection;

conexion.on("open", () => {
  console.log("Conectado a MongoDB");
});

module.exports = conexion;
