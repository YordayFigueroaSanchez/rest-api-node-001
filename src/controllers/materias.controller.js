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

exports.set = async (req, res) => {
    try {
        if (req.params.idEst && req.body) {
            const idEst = req.params.idEst;
            const materiaParam = req.body;
            const estudiante = await Estudiante.findById(idEst);
            estudiante.materias.push(materiaParam);
            await estudiante.save();
            res.json({ isOk:true });
        } else {
            res.status(400).json({error : "Datos insuficiente"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


exports.delete = async (req, res) => {
    try {
        if (req.params.idEst && req.params.idMat) {
            const idEst = req.params.idEst;
            const idMat = req.params.idMat;
            const estudiante = await Estudiante.findById(idEst);
            
            for (let index = 0; index < estudiante.materias.length; index++) {
                const element = estudiante.materias[index];
                if (element._id == idMat) {
                    estudiante.materias.splice(index, 1);
                }
            }

            await estudiante.save();
            
            res.json({ isOk:true });
        } else {
            res.status(400).json({error : "Datos insuficiente"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}