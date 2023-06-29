var mongoose= require('mongoose');
Schema = mongoose.Schema;

var reservaSchema = new mongoose.Schema({
    pasajeroA:String,
    pasajeroB:String,
    fecha:String,
    hora_salida:String,
    numero_asientos:String,
    estado_reserva:String

});

var reserva = mongoose.model('reserva',reservaSchema);
module.exports=reserva;