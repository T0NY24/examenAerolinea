
var aeropuerto = require('../models/aeropuerto');
var reserva = require('../models/reserva');
var vuelo = require('../models/vuelo');

const crearVuelo = async (req, res) => {
  const { aeropuertoA, aeropuertoB, reservaA } = req.body;

  try {
    const aeropuertoAId = await aeropuerto.findById(aeropuertoA);
    const aeropuertoBId = await aeropuerto.findById(aeropuertoB);
    const reservaAId = await reserva.findById(reservaA);

    if (!aeropuertoAId || !aeropuertoBId) {
      return res.status(404).json({ error: 'No se encontró los aeropuertos' });
    }

    const cvuelo = {aeropuertoA: aeropuertoAId,aeropuertoB: aeropuertoBId,reservaA,reservaAId};

    const nuevovuelo = await cvuelo.create(cvuelo);

    res.json(nuevovuelo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el vuelo' });
  }
};

const obtenerVuelos = async (req, res) => {
  try {
    const vuelos = await vuelos.find();
    res.json(vuelos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los vuelos' });
  }
};

const actualizarVuelo = async (req, res) => {
  const { id } = req.params;
  const { nombre,Direccion,Pais,Contacto } = req.body;

  try {
    const vueloActualizado = await vuelo.findByIdAndUpdate(
      id,
      {  nombre,Direccion,Pais,Contacto  },
      { new: true }
    );
    res.json(vueloActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el vuelo' });
  }
};


const eliminarVuelo = async (req, res) => {
  const { id } = req.params;

  try {
    await vuelo.findByIdAndRemove(id);
    res.json({ message: 'vuelo eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el vuelo' });
  }
};
  

  module.exports ={crearVuelo,obtenerVuelos,eliminarVuelo,actualizarVuelo};

