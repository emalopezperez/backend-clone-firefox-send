const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/userControllers")

router.post("/", userControllers.nuevoUsuario)

module.exports = router