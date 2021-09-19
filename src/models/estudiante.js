const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema({
    nombre : {
        type : String,
        require : true
    },
    correo : {
        type : String,
        require : true
    }
});

module.exports = model ( "Estudiante", EstudianteSchema);