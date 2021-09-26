const Profesor = require("../models/profesor");
const jwt = require("jsonwebtoken");

const autorizarProfesor = async (req, res, next) => {
    const strToken =  req.headers.authorization;

    if (!strToken) {
        return res.json({msj: "token no encontrado"});
    }
    try {
        
        const token = strToken.split(" ")[1];
        const palabra = "palabra_secreta_ok";
        const llave = jwt.verify(token, palabra);
        const profesor = await Profesor.findById(llave._id);
        if (!profesor) {
            return res.json({msj: "profesor no encontrado"});
        }
    
        console.log(llave);

    } catch (error) {
        return res.status(500).json(error);
    }

    next();
}

module.exports = autorizarProfesor;