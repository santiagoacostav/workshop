import { Router } from 'express'
import { getAllUsuarios, getUsuarioPorID } from '../controllers/publicoUsuariosCtrl.js';

const router = Router()

// Obtener todos los usuarios

// OK
router.get("/usuarios", getAllUsuarios)

// Ok
router.get("/usuarios/:id", getUsuarioPorID)

export default router