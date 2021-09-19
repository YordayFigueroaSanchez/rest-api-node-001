const express = require("express");
const morgan = require("morgan");
const routerEstudiantes = require('./routes/estudiantes.routes');
const app = express();

//setting
app.set("name", "rest-api-node-001");
app.set("port", process.env.port || 3500);

//middleware
app.use(express.json());
app.use(morgan("common"));


app.use(express.static("public"));  
app.use("/api/estudiantes", routerEstudiantes);

module.exports = app;