const { Router } = require("express");
const routerEstudiantes = Router();

    routerEstudiantes.get("/", (req, res) => {
    const estudiantes = [
      {
        "nombre":"nombre01",
        "apellido":"apellido01"
      },{
        "nombre":"nombre02",
        "apellido":"apellido02"
      },
    ]
    res.json(estudiantes);
  });
  
  routerEstudiantes.post("/", (req, res) => {
    const {nombre, correo} = req.body;
    console.log(nombre);
    res.json("Datos recibidos");
  });
  
  routerEstudiantes.put("/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json("id actualizado");
  });
  
  routerEstudiantes.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json("id eliminado");
  });

  module.exports = routerEstudiantes;