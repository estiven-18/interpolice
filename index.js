//crea una variable con el puerto local o el esignado 
//en las variables globales de la aplicacion
import app from "./app.js";
import dotenv from "dotenv"; //importa la libreria NOTA: no debe ir aqui, es solo un ejemplito

dotenv.config();

const PORT = 3000 || process.env.APP_PORT

app.listen(PORT, () => {
  //* VARIABLES DE .ENV
  console.log(process.env) // TODAS LAS VARIEBLES DE ENTOTNO
  console.log(process.env.OS) // NOMBRE DEL SISTEMA OPERATIVO
  console.log(process.env.NUMBER_OF_PROCESSORS) // NUMERO DE PROCESADORES DONDE SE EJECUTA NODE
  console.log(process.env.NODE) //MUESTRA LA RUTA DONDE ESTA INSTALADO NODE 
  console.log(process.env.COMPUTERNAME) //MUESTRA LA RUTA DONDE ESTA INSTALADO NODE 

  //* VARIABLES CREADAS POR MI

  console.log(process.env.HOST)
  console.log(process.env.DB_BASE)

  console.log(`sevidor corriendo en: ${PORT} `);



  

});




