const { Router } = require("express");
const controllerEstudiante = require('../controllers/estudiantes.controller');
const routerEstudiantes = Router();

    routerEstudiantes.get("/", controllerEstudiante.get);
  
  routerEstudiantes.post("/", controllerEstudiante.set);
  
  routerEstudiantes.put("/:id", controllerEstudiante.update);
  
  routerEstudiantes.delete("/:id", controllerEstudiante.delete);

  module.exports = routerEstudiantes;