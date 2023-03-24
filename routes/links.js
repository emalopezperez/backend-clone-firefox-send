const express = require("express")
const router = express.Router()
const linksControllers = require("../controllers/linksControllers")
const { check } = require('express-validator');
const auth = require("../middleware/auth");

router.post("/",
  [
    check('nombre', 'Sube un archivo').not().isEmpty(),
    check('nombre_original', 'Sube un archivo').not().isEmpty()
  ],
  auth,
  linksControllers.nuevoLink)

module.exports = router