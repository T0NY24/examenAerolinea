
var pasajero = require('../models/pasajero');
var reserva = require('../models/reserva');


const crearReserva = async (req, res) => {
  const { pasajeroA,  fecha,hora_salida,numero_asientos,estado_reserva } = req.body;

  try {
    const pasajeroAId = await pasajero.findById(pasajeroA);
    

    if (!pasajeroAId ) {
      return res.status(404).json({ error: 'No se encontró los pasajeros' });
    }

    const crearreserva = {pasajeroA: pasajeroAId,fecha,hora_salida,numero_asientos,estado_reserva};

    const nuevoreserva = await reserva.create(crearreserva);

    res.json(nuevoreserva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el reserva' });
  }
};

const obtenerReserva = async (req, res) => {
  try {
    const reserva = await reserva.find();
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

const actualizarReserva = async (req, res) => {
  const { id } = req.params;
  const { pasajeroA,  fecha,hora_salida,numero_asientos,estado_reserva  } = req.body;

  try {
    const reservaActualizado = await reserva.findByIdAndUpdate(
      id,
      {  pasajeroA,  fecha,hora_salida,numero_asientos,estado_reserva   },
      { new: true }
    );
    res.json(reservaActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la reserva' });
  }
};


const eliminarReserva = async (req, res) => {
  const { id } = req.params;

  try {
    await reserva.findByIdAndRemove(id);
    res.json({ message: 'reserva eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la reserva' });
  }
};
  

  module.exports ={crearReserva,obtenerReserva,eliminarReserva,actualizarReserva};

