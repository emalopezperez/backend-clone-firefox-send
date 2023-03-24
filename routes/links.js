const express = require("express")
const router = express.Router()
const linksControllers = require("../controllers/linksControllers")
const { check } = require('express-validator');
const auth = require("../middleware/auth");

router.post("/",

  [
    check('name', "El nombre es obligatorio").not().isEmpty(),
    check('email', "Agrega email valido").isEmail(),
    check('password', "El password debe ser de al menos 6 caracteres").isLength({ min: 6 })
  ],
  auth,
  linksControllers.nuevoLink)

module.exports = router