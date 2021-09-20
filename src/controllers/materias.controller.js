const Estudiante = require("../models/estudiante");

exports.get = async (req, res) => {
    try {
        if (req.params.idEst) {
            const idEst = req.params.idEst;
            const estudiante = await Estudiante.findById(idEst);
            res.json(estudiante.materias);
        } else {
            res.status(400).json({error : "Debe enviar el id del estudiante"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}