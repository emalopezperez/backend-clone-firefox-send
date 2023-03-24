const Links = require("../models/Links")
const shortid = require("shortid")
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.nuevoLink = async (req, res, next) => {

  //Mostrar mensajes de error express validator
  const errores = validationResult(req)
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() })
  }

  const { nombre_original } = req.body
  const enlaces = new Links()

  enlaces.url = shortid.generate()
  enlaces.nombre = shortid.generate()
  enlaces.nombre_original = nombre_original

  try {
    // En caso de que el usuario este autenticado
    if (req.user) {
      const { password, descargas } = req.body

      if (descargas) {
        enlaces.descargas = descargas
      }

      if (password) {
        const salt = await bcrypt.genSalt(10)
        enlaces.password = await bcrypt.hash(String(password), salt)
      }

      enlaces.autor = req.user.id
    }

    await enlaces.save()
    return res.json({ msg: "almacenado en la db" })
  } catch (err) {
    console.log(err)
    next(err)
  }
}
