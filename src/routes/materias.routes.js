const {Router} = require("express");

const controllerMaterias = require("../controllers/materias.controller");

const routeMaterias = Router();

routeMaterias.get("/:idEst", controllerMaterias.get);


module.exports = routeMaterias;