import pool from '../config/database.js';

// Toma el ID pasado desde el controlador
export const claseDB = async (id) => {

    try {
        const [datos] = await pool.query('SELECT * FROM datos_1 WHERE id = ?', [id]);
        console.log("DATOS ---->", datos[0])
        /*
          
                [
                    { 

                    } // objetos de la base de datos
                ]


        */

        // datos (array (en este caso de UN objeto))
        return datos[0];

    } catch (error) {
        console.error('Error getting usuarios:', error);
        res.status(500).send('Internal Server Error');
    }

}