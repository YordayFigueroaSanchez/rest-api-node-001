

 exports.get = (req, res) => {
    const estudiantes = [
      {
        "nombre":"nombre01",
        "apellido":"apellido01"
      },{
        "nombre":"nombre02",
        "apellido":"apellido02"
      },
    ]
    res.json(estudiantes);
  }

  exports.set = (req, res) => {
    const {nombre, correo} = req.body;
    console.log(nombre);
    res.json("Datos recibidos");
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