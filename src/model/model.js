
import pool from '../config/database.js';

// Obtener todos los usuarios desde la base de datos
export const getAllUsuariosFromDB = async () => {
    const connection = await pool.getConnection();
    try {
        const [datos] = await pool.query('SELECT * FROM datos_1');
        return datos;
    } catch (error) {
        console.error('Error querying MySQL:', error);
        throw error;
    } finally {
        connection.release();
        console.log(`Número de conexiones activas: ${pool.activeConnections()}`);

    }

};

// Obtener un usuario por ID desde la base de datos
export const getUsuarioPorIDFromDB = async (id) => {
    const connection = await pool.getConnection();
    try {
        const [dato] = await pool.query('SELECT * FROM datos_1 WHERE id = ?', [id]);
        return dato[0];
    } catch (error) {
        console.error('Error querying MySQL:', error);
        throw error;
    } finally {
        connection.release();
        console.log(`Número de conexiones activas: ${pool.activeConnections()}`);

    }
};

// Agregar un nuevo usuario a la base de datos
export const addUsuarioFromDB = async (usuarioData) => {
    const connection = await pool.getConnection();
    try {
        const [result] = await pool.query('INSERT INTO datos_1 SET ?', [usuarioData]);
        const nuevoUsuarioID = result.insertId;
        const nuevoUsuario = await getUsuarioPorIDFromDB(nuevoUsuarioID);
        return nuevoUsuario;
    } catch (error) {
        console.error('Error inserting into MySQL:', error);
        throw error;
    } finally {
        connection.release();
        console.log(`Número de conexiones activas: ${pool.activeConnections()}`);

    }
    
};

// Editar un usuario por ID en la base de datos
export const editUsuarioFromDB = async (id, updatedUsuarioData) => {
    const connection = await pool.getConnection();
    try {
        await pool.query('UPDATE datos_1 SET ? WHERE id = ?', [updatedUsuarioData, id]);
        const updatedUsuario = await getUsuarioPorIDFromDB(id);
        return updatedUsuario;
    } catch (error) {
        console.error('Error updating MySQL:', error);
        throw error;
    } finally {
       connection.release();
        console.log(`Número de conexiones activas: ${pool.activeConnections()}`);

    }
};

// Borrar un usuario por ID de la base de datos
export const deleteUsuarioFromDB = async (id) => {
    const connection = await pool.getConnection();
    try {
        const deletedUsuario = await getUsuarioPorIDFromDB(id);
        await pool.query('DELETE FROM datos_1 WHERE id = ?', [id]);
        return deletedUsuario;
    } catch (error) {
        console.error('Error deleting from MySQL:', error);
        throw error;
    } finally {
        connection.release();
        console.log(`Número de conexiones activas: ${pool.activeConnections()}`);

    }
};

