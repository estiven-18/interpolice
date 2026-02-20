// las rutas del modulo ciudadano 

import { Router } from "express";

//improtamos la logica del controlador para construir 
//cada interacion de la ruta : get, post, delete etc

import * as CiudadanoCtr from '../controllers/ciudadano.controller.js'

//instaciamos el metodo router de express para poder crear las rutas

const router = Router();

//las rutas del modulo 
//ruta para listar todo

router.get("/ciudadano/listartodos",CiudadanoCtr.getCiudadanos);
router.get("/ciudadano/listarporid/:id",CiudadanoCtr.getCiudadanosById);
router.post("/ciudadano/crearciudadano",CiudadanoCtr.createCiudadano);
router.delete("/ciudadano/borrar/:id",CiudadanoCtr.deleteCiudadano);
router.put("/ciudadano/editar/:id",CiudadanoCtr.updateCiudadano);









export default router;