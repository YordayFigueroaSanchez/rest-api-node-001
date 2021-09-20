const Estudiante = require("../models/estudiante")

 exports.get = async (req, res) => {
   try {
      const estudiantes = await Estudiante.find({activo : true})
      res.status(200).json(estudiantes);
   } catch (error) {
      res.status(500).json(error);
   }
  }

  exports.set = async (req, res) => {
    try {
      const {nombre, correo} = req.body;
      
      if (nombre && correo) {
        const newEstudiante = new Estudiante({nombre, correo});
        await newEstudiante.save();
        console.log(newEstudiante);
        res.status(200).json({
          msg : "elemento insertado",
          id : newEstudiante._id
        });
        
      } else {
        res.json({isOK:false, msg: "los datos regqeridos"});
      }
  
    } catch (error) {
      res.status(500).json(error);
    }
  }

  exports.update = async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;

      if (id && data) {

        await Estudiante.findByIdAndUpdate(id,data);
        console.log(id);
        res.status(200).json("Registro actualizado.");
        
      } else {
        res.status(400).json({
          msg : "Datos insuficientes."
        });
      }
      
    } catch (error) {
      res.status(500).json(error);
    }
  }

  exports.delete = async (req, res) => {
    try {
      const id = req.params.id;
      const deleteEstudiante = await Estudiante.findByIdAndUpdate(id,{activo : false});
      console.log(id);
      res.status(200).json({
        msg : "elemento eliminado satisfactoriamente",
        isOk : true
      });
      
    } catch (error) {
      res.status(500).json(error);
    }
  }