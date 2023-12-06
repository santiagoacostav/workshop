import { getAllUsuariosFromDB, getUsuarioPorIDFromDB } from '../model/model.js';


// export const getAllUsuarios = async(req,res) => {
export async function getAllUsuarios(req, res) {
    try {
        const datos = await getAllUsuariosFromDB();
        res.render("publicoUsuarios", {
            data: datos
        })
    } catch (error) {
        console.error('Error getting usuarios:', error);
        res.status(500).send('Internal Server Error');
    }
}

// export const getUsuarioPorID = async(req,res) => {
export async function getUsuarioPorID(req, res) {
    const usuarioID = req.params.id;
    try {
        const usuario = await getUsuarioPorIDFromDB(usuarioID);
        if (usuario) {
            // res.status(200).json(usuario);
            res.render("publicoUsuario", {
                data: usuario
            })
        } else {
            res.status(404).send('Usuario not found');
        }
    } catch (error) {
        console.error('Error getting usuario by ID:', error);
        res.status(500).send('Internal Server Error');
    }

}
