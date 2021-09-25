const { Router } = require("express");
const controllerProfesor = require('../controllers/profesores.controller');
const routerProfesores = Router();

routerProfesores.post("/registrar", controllerProfesor.set);

routerProfesores.post("/login", controllerProfesor.login);

module.exports = routerProfesores;