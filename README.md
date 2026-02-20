# BITACORA DEL PROYECTO

## HERRAMIENTAS BACKEND

* gestor: mysql - maria db

* express: framework node js -> gestionar APIS usando protocolo http

* node js: js stadalone - instalado en mi pc -> en consola: node -v

* nodemon: plugin para usar en dasarrollo - NO SE USA EN PRODUCCION

* mysql2: gestionar las interacciones con la bd

* cors: pligin para la gestion de CORS

* env: variables globales del proyecto

## HERRAMIENTAS FRONTEND

* css: framework Bootstrap
* bundler: vita - (webpack)
* vanilla js

## PASP A PASO BACKEND

- iniciar el proyecto con node js
- intalar los paquetes requeridos: npm install nodemon mysql2 cors env express
- configurar el control de verciones del codigo: crear el .gitignore
- iniciar el seguimineto del repositorio: git init, git add .
- conectamos el repo de la nube con el repo local:
git remote add origin https://github.com/estiven-18/interpolice_repo_wall.git
- hacemos la primera actualizacion local y remota:

local: git commit . -m "inicio del proyceto"

remota: git push -u origin main

- revicion de package.json: verificar las dependecias
- modificamos el package para ejecucion del proyecto:

"start": "node index.js",  Para Produccion (Ejecutar en la nube)

"dev": "nodemon index.js", para Desarrollo (Ejecutar local)

## CODIFICACION DEL PROYECTO

- crear el archivo principal: index.js

- configurar los pligins: nodemon, cors, hacer la primera prueba

npm run dev (modo desarrollador) npm start (modo produccion)

## CREACION DEL MODULO CONEXION A LA BASE DE DATOS

- importamos la libreria mysql2 y hacemos la connecion de acuerdo al codigo de ejemplo

## CODIFICACION DEL MODULO CIUDADANOS


### IMPLEMENTACION DE ARQUITECTURA POR CAPAS (N-TIER)
- controller : manaja la logica de peticiones y respuestas
- routes : se encarga de construir los endpoints o rutas de la api, en ella podemos inyectar los middlewares
- models : los models se encargan de la interracio (consultas) con SGBD, implementa la logica de negocio; 

CAPAS DE SOPORTE:

- middleware : capa intermedia entre el cliente y la api (ejemplo : validar tokens, validar ip por cors)
- helpers : ayudas o ayudantes, clases o funciones reusables del sistema, por ejemplo un sistema de errores

## CONFIGURACION DE VARIABLES DE ENTORNO / VARIABLES GLOBALES

sirven para mejorar la confidencialidad ya que no se exponen las credenciales, mejora la mantenibilidad
- en node.js : variebles .env
- intalar paquete dotenv y configurarlo (nota: node.js ya lo implementa nativo)
- npm i dotenv
- crear archivo 
- ver el ejemplo de archivo .env

