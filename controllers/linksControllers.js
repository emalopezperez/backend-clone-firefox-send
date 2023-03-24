const Links = require("../models/Links")
const shortid = require("shortid")

exports.nuevoLink = async (req, res, next) => {

  const { nombre_original, password } = req.body

  const enlaces = new Links()

  enlaces.url = shortid.generate()
  enlaces.nombre = shortid.generate()
  enlaces.nombre_original = nombre_original
  enlaces.password = password

  console.log(enlaces)
}