const UserScheme = require("../models/Usuario")

exports.nuevoUsuario = async (req, res) => {

  const user =await new UserScheme(req.body)

  user.save()
  
  res.json({
    msg:"usuario creado"
  })
}