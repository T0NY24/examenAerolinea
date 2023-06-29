var mongoose= require('mongoose');
Schema=mongoose.Schema;
var aeropuertoSchema= new mongoose.Schema({
    Nombre:String,
    Direccion:String,
    Pais:Number,
    Contacto:Number,
    
});
var aeropuerto=mongoose.model('aeropuerto',aeropuertoSchema);
module.exports=aeropuerto;