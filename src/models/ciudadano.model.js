// la capa modelo para el modulo de ciudadanos

//importamos la conexion
import { db } from "./bdatos.js";

//activar el manejo de promesas (asincronicas)


//creamos el modulo : usando el concepto de orientado a objetos
//la clase modelo correspondiente a ciudadano

export const ciudadanoModel = {
  //listar todos : aplicamos funciones asincronicas para oprovechar las promesas, (es decir los hilos de ejecucion)
  findAll: async () => {
    const sql = "SELECT * FROM ciudadano ORDER BY apellidos";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql);

    return rows;
  },

  //buscar por id , recibe id como parametro de la funcion

  findById: async (id) => {
    const sql = "SELECT * FROM ciudadano WHERE codigo=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  //borramos teniendo en cuenta el id que llega del controllador por paranetros

  delete: async (id) => {
    const sql = "DELETE FROM ciudadano WHERE codigo=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "INSERT INTO ciudadano SET ? ";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  update: async (id,data) => {
    const sql = "UPDATE ciudadano SET ? WHERE codigo = ?";
    const [rows] = await db.query(sql, [data,id]);
    return rows;
  },
};
