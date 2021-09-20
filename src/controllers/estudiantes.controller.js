const Estudiante = require("../models/estudiante")

 exports.get = async (req, res) => {
   try {
      const estudiantes = await Estudiante.find()
      res.json(estudiantes);
   } catch (error) {
      res.json(error);
   }
  }

  exports.set = async (req, res) => {
    try {
      const {nombre, correo} = req.body;
      
      if (nombre && correo) {
        const newEstudiante = new Estudiante({nombre, correo});
        await newEstudiante.save();
        console.log(newEstudiante);
        res.json({
          msg : "elemento insertado",
          id : newEstudiante._id
        });
        
      } else {
        res.json({isOK:false, msg: "los datos regqeridos"});
      }
  
    } catch (error) {
      res.json(error);
    }
  }

  exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json("id actualizado");
  }

  exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json("id eliminado");
  }