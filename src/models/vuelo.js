var mongoose= require('mongoose');
Schema = mongoose.Schema;

var vueloSchema = new mongoose.Schema({
    aeropuertoA:Object,
    aeropuertoB:Object,
    reservaA:String,



});

var vuelo = mongoose.model('vuelo',vueloSchema);
module.exports=vuelo;