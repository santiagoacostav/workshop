// backend/src/config/database.js
import { config } from "dotenv";
config();
import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_DATABASE || "workshop2023",
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    port: process.env.DB_PORT || 3306
});

// Prueba de conexión
/* pool.getConnection()
    .then(connection => {
        console.log('Connected to MySQL database');
        connection.release();
    })
    .catch(err => {
        console.error('Error connecting to MySQL:', err);
    });
*/

export default pool;



/* const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario_mysql',
    password: 'tu_contraseña_mysql',
    database: 'nombre_de_tu_base_de_datos',
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = connection; */
