import mysql from "mysql2/promise";

import dotenv from "dotenv"; //importa la libreria NOTA: no debe ir aqui, es solo un ejemplito

dotenv.config();

let cnx;



try {
  // Create the connection to database
  cnx = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  const conexion = await cnx.getConnection();
  console.log("conexion exitosa");

  conexion.release();
} catch (error) {
  console.log(`ha occurriod un error: ${error.message}`);
}

export const db = cnx;
export { cnx };
