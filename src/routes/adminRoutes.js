import { Router } from 'express'
import {
    getAllUsuarios,
    addUsuario,
    addUsuarioPOST,
    editUsuario,
    editUsuarioPOST,
    deleteUsuario
} from '../controllers/adminUsuariosCtrl.js'

const router = Router()

// OBTENER todos los usuarios - OK
router.get("/admin/", getAllUsuarios)


// [-----
// CREAR usuario VIEW
router.get("/admin/crear", addUsuario)

// Manejo de datos del form
router.post("/admin/crear", addUsuarioPOST)
// -----]




// [-----
// Tomar usuario para ACTUALIZAR VIEW
router.get("/admin/editar/:id", editUsuario)

// Manejo de datos del form
router.post("/admin/editar/:id", editUsuarioPOST)
// -----]





// BORRAR usuario
router.get("/admin/borrar/:id", deleteUsuario)


export default router
