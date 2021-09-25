const Profesor = require("../models/profesor")
const jwt = require("jsonwebtoken");

 
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

  exports.login = async (req, res) => {
      try {
        const {correo, clave} = req.body;
          if (clave && correo) {

            const profesor = await Profesor.findOne({correo});
            if (!profesor) {
                res.json({token: null, msg: "usuario o contaseña incorrectas"});
            } else {
                if (profesor.clave == clave) {
                    const {_id, correo} = profesor;
                    const opt = {
                        expiresIn:'1h'
                    }
                    const palabra = "palabra_secreta_ok";
                    const token = jwt.sign({_id, correo},palabra,opt);
                    res.json({token});
                } else {
                    //no coincide la clave
                    res.json({token: null, msg: "usuario o contaseña incorrectas"});
                }
                
            }

              
          } else {
            res.json({isOK:false, msg: "datos insuficientes"});
          }
      } catch (error) {
        res.status(500).json(error);
      }
  }