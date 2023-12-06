import {
    getAllUsuariosFromDB,
    addUsuarioFromDB,
    editUsuarioFromDB,
    deleteUsuarioFromDB,
    getUsuarioPorIDFromDB
} from '../model/model.js';

// OK
// export const getAllUsuarios = async(req, res) 
export async function getAllUsuarios(req, res) {
    try {
        const datos = await getAllUsuariosFromDB();

        if (!datos) {
            return res.render("error404")
        }
        res.render("adminUsuarios", {
            data: datos,
            mensaje: req.query.mensaje || ""
        })
    } catch (error) {
        console.error('Error getting usuarios:', error);
        res.status(500).send('Internal Server Error');
    }
}

// OK
export async function addUsuario(req, res) {
    try {
        res.render("adminCrear", {
            titulo: "Crear usuario"
        })
    } catch (error) {
        console.error('Error adding usuario:', error);
        res.status(500).send('Internal Server Error');
    }

}

// OK
export async function addUsuarioPOST(req, res) {
    const newUsuarioData = req.body;
    try {
        const nuevoUsuario = await addUsuarioFromDB(newUsuarioData);
        console.log("nuevoUsuario", nuevoUsuario)
        res.redirect("/admin" + "?mensaje=Usuario agregado")
    } catch (error) {
        console.error('Error adding Usuario:', error);
        res.status(500).send('Internal Server Error');
    }

}

// OK
export async function editUsuario(req, res) {
    const usuarioID = req.params.id;
    try {
        const usuario = await getUsuarioPorIDFromDB(usuarioID);
        if (usuario) {
            // res.status(200).json(usuario);
            res.render("adminActualizar", {
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

// OK
export async function editUsuarioPOST(req, res) {
    const usuarioID = req.params.id;
    const updatedUsuarioData = req.body;
    try {
        const updatedUsuario = await editUsuarioFromDB(usuarioID, updatedUsuarioData);
        if (updatedUsuario) {
            // res.status(200).json(updatedUsuario);
            res.redirect("/admin" + "?mensaje=Usuario actualizado")
        } else {
            res.status(404).send('Usuario not found');
        }
    } catch (error) {
        console.error('Error editing Usuario:', error);
        res.status(500).send('Internal Server Error');
    }

}

export async function deleteUsuario(req, res) {
    const usuarioID = req.params.id;
    try {
        const deletedUsuario = await deleteUsuarioFromDB(usuarioID);
        if (deletedUsuario) {
            // res.status(200).json(deletedUsuario);
            res.redirect("/admin" + "?mensaje=Usuario Borrado")
        } else {
            res.status(404).send('usuario not found');
        }
    } catch (error) {
        console.error('Error deleting usuario:', error);
        res.status(500).send('Internal Server Error');
    }

}