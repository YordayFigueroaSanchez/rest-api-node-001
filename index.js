const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/doble/:num', (req, res) => {
    console.log(req.params);
    const doble = {
      "num" : req.params.num,
      "valor": req.params.num * 2
    }
    res.json(doble);
  });

app.get('/estudiantes', (req, res) => {
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

app.post('/estudiantes', (req, res) => {
  
res.json("Datos recibidos");

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})