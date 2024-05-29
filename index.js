const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

const PUERTO = 3000;

const conexion = mysql.createConnection({
  host: "localhost",
  database: "myuniverse",
  user: "root",
  password: "contra123",
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

conexion.connect((error) => {
  if (error) throw error;
  console.log("Conexión exitosa a la base de datos");
});

app.get("/", (req, res) => {
  res.send("API");
});

//Listado de estudiantes

app.get("/listado_estudiantes", (req, res) => {
  const query = "SELECT * FROM listado_estudiantes";
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registros`);
    }
  });
});

app.get("/listado_estudiantes/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM listado_estudiantes WHERE id = ${id}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registro con ese id`);
    }
  });
});

app.post("/listado_estudiantes/agregar", (req, res) => {
  const listado_estudiantes = {
    nombre_completo: req.body.nombre_completo,
    correo: req.body.correo,
    telefono: req.body.telefono,
    lugar_residencia: req.body.lugar_residencia,
    carrera: req.body.carrera,
    ano_estudio: req.body.ano_estudio,
    grupo_estudiante: req.body.grupo_estudiante,
    horas_trabajadas: req.body.horas_trabajadas,
    empresa: req.body.empresa,
    observacion: req.body.observacion,
  };

  const query = `INSERT INTO listado_estudiantes SET ?`;
  conexion.query(query, listado_estudiantes, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se insertó correctamente el estudiante`);
  });
});

app.put("/listado_estudiantes/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    nombre_completo,
    correo,
    telefono,
    lugar_residencia,
    carrera,
    ano_estudio,
    grupo_estudiante,
    horas_trabajadas,
    empresa,
    observacion,
  } = req.body;

  query = `UPDATE listado_estudiantes SET nombre_completo = ?, correo = ?, telefono = ?, lugar_residencia = ?, carrera = ?, ano_estudio = ?, grupo_estudiante = ?, horas_trabajadas = ?, empresa = ?, observacion = ? WHERE id = ?`
  valores = [nombre_completo, correo, telefono, lugar_residencia, carrera, ano_estudio, grupo_estudiante, horas_trabajadas, empresa, observacion, id]

  conexion.query(query, valores,(error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizo correctamente el listado de estudiantes`);
  });
});

app.delete("/listado_estudiantes/borrar/:id", (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM listado_estudiantes WHERE id=${id}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se eliminó correctamente el usuario`);
  });
});

//Listado de lugares
app.get("/listado_lugares", (req, res) => {
  const query = "SELECT * FROM listado_lugares";
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registros de lugares`);
    }
  });
});

app.get("/listado_lugares/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM listado_lugares WHERE id = ${id}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registro con este id`);
    }
  });
});

app.post("/listado_lugares/agregar", (req, res) => {
  const listado_lugares = {
    nombre_lugar: req.body.nombre_lugar,
    ubicacion: req.body.ubicacion,
    trabajo: req.body.trabajo,
    contacto: req.body.contacto,
    horas_trabajadas: req.body.horas_trabajadas,
  };
  const query = `INSERT INTO listado_lugares SET?`;
  conexion.query(query, listado_lugares, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se insertó correctamente el lugar de trabajo`);
  });
});

app.put("/listado_lugares/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_lugar, ubicacion, trabajo, contacto, horas_trabajadas } =
    req.body;

    const query = `UPDATE listado_lugares SET nombre_lugar = ?, ubicacion = ?, trabajo = ?, contacto = ?, horas_trabajadas = ? WHERE id = ?`;
    const valores = [nombre_lugar, ubicacion, trabajo, contacto, horas_trabajadas, id];
  
  conexion.query(query, valores, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizó la lista de lugares correctamente`);
  });
});

app.delete("/listado_lugares/borrar/:id", (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM listado_lugares WHERE id=${id}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se eliminó correctamente el lugar`);
  });
});


//Para ofertas laborales
app.get("/ofertas_laborales", (req, res) => {
  const query = "SELECT * FROM ofertas_laborales";
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registro de ofertas laborales`);
    }
  });
});

app.get("/ofertas_laborales/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM ofertas_laborales WHERE id = ${id}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registro con este id`);
    }
  });
});

app.post("/ofertas_laborales/agregar", (req, res) => {
  const ofertas_laborales = {
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion,
    nombre_estudiante: req.body.nombre_estudiante,
    celular: req.body.celular,
    horas_inicial: req.body.horas_inicial,
    horas_final: req.body.horas_final,
    observaciones: req.body.observaciones,
  };
  const query = `INSERT INTO ofertas_laborales SET?`;
  conexion.query(query, ofertas_laborales, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se insertó correctamente la oferta de trabajo`);
  });
});

app.put("/ofertas_laborales/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    ubicacion,
    nombre_estudiante,
    celular,
    horas_inicial,
    horas_final,
    observaciones,
  } = req.body;

  
  const query = `UPDATE ofertas_laborales SET nombre = ?, ubicacion = ?, nombre_estudiante = ?, celular = ?, horas_inicial = ?, horas_final = ?, observaciones = ? WHERE id = ?`;
  const valores = [nombre, ubicacion, nombre_estudiante, celular, horas_inicial, horas_final, observaciones, id];

  conexion.query(query, valores,(error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizaron las ofertas correctamente`);
  });
});

app.delete("/ofertas_laborales/borrar/:id", (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM ofertas_laborales WHERE id = ${id}`;

  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se eliminó correctamente la oferta de trabajo`);
  });
});
