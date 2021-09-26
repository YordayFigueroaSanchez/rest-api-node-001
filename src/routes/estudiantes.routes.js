const { Router } = require("express");
const controllerEstudiante = require('../controllers/estudiantes.controller');
const autorizarProfesor = require("../auth/profesor.auth");
const routerEstudiantes = Router();

  routerEstudiantes.get("/", autorizarProfesor, controllerEstudiante.get);
  
  routerEstudiantes.post("/", controllerEstudiante.set);
  
  routerEstudiantes.put("/:id", controllerEstudiante.update);
  
  routerEstudiantes.delete("/:id", controllerEstudiante.delete);

  module.exports = routerEstudiantes;