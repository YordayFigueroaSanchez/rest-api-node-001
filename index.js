const express = require('express')
const app = express()
const port = 3000

app.use( express.json());

app.get("/", (req, res) => {
  res.send('Hello World!')
});

app.get("/doble/:num", (req, res) => {
    console.log(req.params);
    const doble = {
      "num" : req.params.num,
      "valor": req.params.num * 2
    }
    res.json(doble);
  });

app.get("/estudiantes", (req, res) => {
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
});

app.post("/estudiantes", (req, res) => {
  const {nombre, correo} = req.body;
  console.log(nombre);
  res.json("Datos recibidos");
});

app.put("/estudiantes/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json("id actualizado");
});

app.delete("/estudiantes/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json("id eliminado");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});