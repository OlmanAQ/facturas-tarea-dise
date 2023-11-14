const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const moment = require('moment');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'facturacion',
  password: '1234',
  port: 5432,//5432
});

// Rutas CRUD aquí

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Manejo de Facturas');
  });

// Obtener todos los productos
app.get('/api/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Obtener un producto por ID
app.get('/api/productos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Crear un nuevo libro
app.post('/api/productos', async (req, res) => {
  try {
    let { nombre, cedula, telefono, correo } = req.body;
    console.log({ nombre, cedula, telefono, correo });
    // Formatear la fecha a 'DD/MMM/YYYY' usando moment.js
    //const fechaFormateada = publicado ? moment(publicado, 'YYYY-MM-DD').format('DD/MM/YYYY') : null;
    //console.log(fechaFormateada);
    await pool.query('INSERT INTO productos (Nombre, Cedula, Telefono , Correo) VALUES ($1, $2, $3, $4) RETURNING *', [nombre, cedula, telefono, correo]);
    res.json({ message: 'Cliente agragado exitosamente' });

    
  } catch (error) {
    console.error('Error inserting producto:', error);
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un producto
app.put('/api/productos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, cedula, telefono, correo } = req.body;
    await pool.query('UPDATE producto SET nombre = $1, cedula = $2, Telefono = $3, Correo = $4 WHERE id = $5', [nombre, cedula, telefono, correo, id]);
    res.json({ message: 'Libro actualizado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Eliminar un producto
app.delete('/api/productos/:id', async (req, res) => {

  try {
    const { id } = req.params;
    
    await pool.query('DELETE FROM productos WHERE id = $1', [id]);
    
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});


