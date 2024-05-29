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
    nombre: req.body.nombre_completo,
    email: req.body.correo,
    telefono: req.body.telefono,
    residencia: req.body.lugar_residencia,
    carrera: req.body.carrera,
    grado: req.body.ano_estudio,
    grupo: req.body.grupo_estudiante,
    horas: req.body.horas_trabajadas,
    empresa: req.body.empresa,
    observacion: req.body.observacion,
    acciones: req.body.acciones,
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
    nombre,
    email,
    telefono,
    residencia,
    carrera,
    grado,
    grupo,
    horas,
    empresa,
    observacion,
    acciones,
  } = req.body;

  const query = `UDPATE listado_estudiantes SET nombre=${nombre}, email=${email}, telefono=${telefono}, residencia=${residencia}, carrera = ${carrera}, grado=${grado}, grupo=${grupo}, horas=${horas}, empresa=${empresa}, observación=${observacion}, acciones=${acciones}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizo correctamente el listado de estudiantes`);
  });
});

app.delete("/listado_estudiantes/borrar/:id", (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM listado_estudiantes WHERE id_estudiante=${id}`;
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
    nombre: req.body.nombre_lugar,
    ubicacion: req.body.ubicacion,
    trabajo: req.body.trabajo,
    contacto: req.body.contacto,
    horas: req.body.horas_trabajadas,
  };
  const query = `INSERT INTO listado_lugares SET?`;
  conexion.query(query, usuario, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se insertó correctamente el lugar de trabajo`);
  });
});

app.put("/listado_lugares/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_lugar, ubicacion, trabajo, contacto, horas_trabajadas } =
    req.body;

  const query = `UDPATE listado_lugares SET nombre=${nombre_lugar}, ubicacion=${ubicacion}, trabajo=${trabajo}, contacto=${contacto}, horas=${horas_trabajadas}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizó la lista de lugares correctamente`);
  });
});

app.delete("/listado_lugares/borrar/:id", (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM listado_lugares WHERE id_lugares=${id}`;
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
    estudiante: req.body.nombre_estudiante,
    celular: req.body.celular,
    horas_inicio: req.body.horas_inicial,
    horas_fin: req.body.horas_final,
    observacion: req.body.observaciones,
  };
  const query = `INSERT INTO ofertas_lugares SET?`;
  conexion.query(query, usuario, (error, resultado) => {
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

  const query = `UDPATE ofertas_laborales SET nombre = ${nombre}, ubicacion = ${ubicacion}, estudiante = ${nombre_estudiante}, celular = ${celular}, horas iniciales = ${horas_inicial}, horas finales = ${horas_final}, observaciones = ${observaciones}`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizaron las ofertas correctamente`);
  });
});

app.delete("/ofertas_laborales/borrar/:id", (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM ofertas_laborales WHERE id_ofertas = ${id}`;

  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se eliminó correctamente la oferta de trabajo`);
  });
});
