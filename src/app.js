const express = require("express");
const morgan = require("morgan");
const conexionDB = require("./db.conexion");
const routerEstudiantes = require('./routes/estudiantes.routes');
const routerMaterias = require('./routes/materias.routes');
const routerProfesores = require('./routes/profesores.routes');
const fileupload = require("express-fileupload");
const app = express();

//Conexion a la DB
conexionDB();

//setting
app.set("name", "rest-api-node-001");
app.set("port", process.env.port || 3500);

//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(fileupload({
    createParentPath:true
}));


app.use(express.static("public"));  
app.use("/api/estudiantes", routerEstudiantes);
app.use("/api/materias", routerMaterias);
app.use("/api/profesores", routerProfesores);

module.exports = app;