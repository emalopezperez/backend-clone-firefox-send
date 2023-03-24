const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/userControllers")
const { check } = require('express-validator');

router.post("/",

  [
    check('name', "El nombre es obligatorio").not().isEmpty(),
    check('email', "Agrega email valido").isEmail(),
    check('password', "El password debe ser de al menos 6 caracteres").isLength({ min: 6 })
  ],
  userControllers.nuevoUsuario)

module.exports = router