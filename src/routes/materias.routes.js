const {Router} = require("express");

const controllerMaterias = require("../controllers/materias.controller");

const routeMaterias = Router();

routeMaterias.get("/:idEst", controllerMaterias.get);

routeMaterias.post("/:idEst", controllerMaterias.set);

routeMaterias.delete("/:idEst/:idMat", controllerMaterias.delete);


module.exports = routeMaterias;