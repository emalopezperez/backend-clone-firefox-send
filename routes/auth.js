const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/authControllers")
const { check } = require('express-validator');

router.post("/",
  [
    check('name', "El nombre es obligatorio").not().isEmpty(),
    check('email', "Agrega email valido").isEmail(),
    check('password', "El password debe ser de al menos 6 caracteres").isLength({ min: 6 })
  ],
  authControllers.autenticarUsuario)

router.get("/",

authControllers.usuarioAutenticado
)

module.exports = router