const express = require('express');
const router = express.Router();
const {crearPasajero, obtenerpasajero , obtenerPasajero, eliminarPasajero, actualizarPasajero} = require('../controllers/pasajeroController');
const {crearAeropuerto,obtenerAeropuertos,actualizaraeropuerto,eliminaraAeropuerto} = require('../controllers/aeropuertoController');
const {crearVuelo,obtenerVuelos,eliminarVuelo,actualizarVuelo} = require('../controllers/vueloController');
const {crearReserva,obtenerReserva,eliminarReserva,actualizarReserva} = require('../controllers/reservaController');
//Rutas Pasajeros
router.get('/pasajeros', obtenerpasajero);
router.post('/pasajeros', crearPasajero);
router.get('/pasajeros/:id', obtenerPasajero);
router.put('/pasajeros/:id', actualizarPasajero);
router.delete('/pasajeros/:id', eliminarPasajero);


//Rutas Aeropuertos
router.get('/aeropuertos', obtenerAeropuertos);
router.post('/aeropuerto', crearAeropuerto);
router.put('/aeropuerto/:id', actualizaraeropuerto);
router.delete('/aeropuerto/:id',eliminaraAeropuerto);


//Rutas Vuelos
router.get('/vuelo', obtenerVuelos);
router.post('/vuelo', crearVuelo);
router.put('/vuelo/:id', actualizarVuelo);
router.delete('/vuelo/:id', eliminarVuelo);

//Rutas Reservas
router.get('/reserva', obtenerReserva);
router.post('/reserva', crearReserva);
router.put('/reserva/:id', actualizarReserva);
router.delete('/reserva/:id', eliminarReserva);


module.exports = router;
