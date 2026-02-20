//API REST: GET, POST, PUT, DELETE -> express

//importamos la libreria express

import express from "express";
import cors from "cors";
import ciudadanoRutas from "./src/routes/ciudadano.route.js";

//instaciamos la libreria en un objeto - app
//cuando pongo app. voy a bajar todos los metodos de express
const app = express();

//sereañiza los request y response
app.use(express.json());

app.use(cors());

app.use("/", ciudadanoRutas);

export default app;
