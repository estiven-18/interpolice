// controllador para ciudadano : el encargado de escuchas y responder las peticiones

import { ciudadanoModel } from "../models/ciudadano.model.js";

export const getCiudadanos = async (req, res) => {
  //codigo protegido con try -  catch
  try {
    const result = await ciudadanoModel.findAll();
    res.json({ result });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los ciudadanos"+error,
    });
  }
};

//buscar ciudadano por el parametro id
export const getCiudadanosById = async (req, res) => {
  //codigo protegido con try -  catch
  try {
    const result = await ciudadanoModel.findById(req.params.id);
    res.json({ result });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el ciudadano",
    });
  }
};

//insertar un registro
export const createCiudadano = async (req, res) => {
  //codigo protegido con try -  catch
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fechaNace: req.body.fechaNace,
    planetaOrigen: req.body.planetaOrigen,
    planetaRecidencia: req.body.planetaRecidencia,
    foto: req.body.foto,
    codigoQr: req.body.codigoQr,
    estado: req.body.estado,
  };
  try {
    const result = await ciudadanoModel.create(data);
    res.json({ result });
  } catch (error) {
    res.status(500).json({
      error: "error al crear el ciudadano",
    });
  }
};

export const deleteCiudadano = async (req, res) => {
  //codigo protegido con try -  catch
  try {
    const result = await ciudadanoModel.delete(req.params.id);
    res.json({ result });
  } catch (error) {
    res.status(500).json({
      error: "error al borrar el ciudadano",
    });
  }
};

export const updateCiudadano = async (req, res) => {
  //codigo protegido con try -  catch
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fechaNace: req.body.fechaNace,
    planetaOrigen: req.body.planetaOrigen,
    planetaRecidencia: req.body.planetaRecidencia,
    foto: req.body.foto,
    codigoQr: req.body.codigoQr,
    estado: req.body.estado,
  };
  try {
    const result = await ciudadanoModel.update(req.params.id, data);
    res.json({ result });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el ciudadano",
    });
  }
};


