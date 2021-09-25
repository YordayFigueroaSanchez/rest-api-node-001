const Profesor = require("../models/profesor")

 
 exports.set = async (req, res) => {
    try {
      const {correo, clave} = req.body;
      
      if (clave && correo) {
        const newProfesor = new Profesor({correo, clave});
        await newProfesor.save();
        console.log(newProfesor);
        res.status(200).json({
          msg : "elemento insertado",
          id : newProfesor._id
        });
        
      } else {
        res.json({isOK:false, msg: "datos insuficientes"});
      }
  
    } catch (error) {
      res.status(500).json(error);
    }
  }