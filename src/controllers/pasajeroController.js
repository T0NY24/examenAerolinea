
var pasajero =require('../models/pasajero');

const crearPasajero = async (req, res) => {
  
    const {nombres,apellidos,edad,genero,descripcion,telefono} = req.body;
  

    try {
      const nuevaPasajero = await pasajero.create({ nombres,apellidos,edad,genero,descripcion,telefono});
      res.json(nuevaPasajero);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el pasajero' });
    }
  };

  
  const obtenerPasajero = async (req, res) => {
    const { id } = req.params;
  
    try {
      const pasajeroId = await pasajero.findByIdAndRemove(id);
  
      if (!pasajeroId) {
        return res.status(404).json({ error: 'Pasajero no encontrado' });
      }
      
      
    } catch (error) {
      res.status(500).json({ error: 'Error al encontrar el pasajero' });
    }
  };

  const obtenerpasajero = async (req, res) => {
    try {
      const pasajeros = await pasajero.find();
      res.json(pasajeros);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los pasajeros' });
    }
  };



  const actualizarPasajero = async (req, res) => {
    const { id } = req.params;
    const { nombres,apellidos,edad,genero,descripcion,telefono } = req.body;
  
    try {
      const pasajeroActualizado = await pasajero.findByIdAndUpdate(
        id,
        { nombres,apellidos,edad,genero,descripcion,telefono},
        { new: true }
      );
      res.json(pasajeroActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el pasajero' });
    }
  };
  
  
  const eliminarPasajero = async (req, res) => {
    const { id } = req.params;
  
    try {
      await persona.findByIdAndRemove(id);
      res.json({ message: 'Pasajero eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el pasajero' });
    }
  };


  module.exports ={crearPasajero, obtenerpasajero , obtenerPasajero, eliminarPasajero, actualizarPasajero};

