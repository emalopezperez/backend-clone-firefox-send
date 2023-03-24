const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/authControllers")
const { check } = require('express-validator');
const auth = require("../middleware/auth")

router.post("/",
  [
    check('email', "Agrega email valido").isEmail(),
    check('password', "El password no puede ir vacio").not().isEmpty()
  ],
  authControllers.autenticarUsuario)

router.get("/",
auth,
authControllers.usuarioAutenticado
)

module.exports = router