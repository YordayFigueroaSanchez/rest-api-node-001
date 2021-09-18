const express = require('express');
const routerEstudiantes = require('./routes/estudiantes.routes');
const app = express();

//setting
app.set("name", "rest-api-node-001");
app.set("port", process.env.port || 3500);

app.use( express.json());

app.get("/", (req, res) => {
    res.send('Hello World!')
  });

app.use("/api/estudiantes", routerEstudiantes);

  module.exports = app;