var mongoose= require('mongoose');
Schema = mongoose.Schema;

var pasajeroSchema = new mongoose.Schema({
    nombres:String,
    apellidos:String,
    edad:Number,
    genero:String,
    descripcion:String,
    telefono:String

});

var pasajero = mongoose.model('pasajero',pasajeroSchema);
module.exports=pasajero;