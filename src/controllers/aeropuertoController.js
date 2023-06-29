const aeropuerto = require('../models/aeropuerto');


const crearAeropuerto = async (req, res) => {
    
    const {Nombre,Direccion,Pais,Contacto} = req.body;
  
    try {
      const nuevaaeropuerto = await aeropuerto.create({ Nombre,Direccion,Pais,Contacto});
      res.json(nuevaaeropuerto);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el aeropuerto' });
    }
  };


  
  const obtenerAeropuertos = async (req, res) => {
    try {
      const aeropuerto = await aeropuerto.find();
      res.json(aeropuerto);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los aeropuertos' });
    }
  };

  const actualizaraeropuerto = async (req, res) => {
    const { id } = req.params;
    const { Nombre,Direccion,Pais,Contacto} = req.body;
  
    try {
      const aeropuertoActualizado = await aeropuerto.findByIdAndUpdate(
        id,
        { Nombre,Direccion,Pais,Contacto},
        { new: true }
      );
      res.json(aeropuertoActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el aeropuerto' });
    }
  };
  
  
  const eliminaraAeropuerto = async (req, res) => {
    const { id } = req.params;
  
    try {
      await aeropuerto.findByIdAndRemove(id);
      res.json({ message: 'aeropuerto eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el aeropuerto' });
    }
  };






  module.exports = {crearAeropuerto,obtenerAeropuertos,actualizaraeropuerto,eliminaraAeropuerto};