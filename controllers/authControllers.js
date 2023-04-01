const UserScheme = require("../models/Usuario");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: '.env' })
const { validationResult } = require('express-validator');

exports.autenticarUsuario = async (req, res, next) => {

  //Mostrar mensajes de error express validator
  const errores = validationResult(req)
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() })
  }

  const { email, password } = req.body;
  const user = await UserScheme.findOne({ email });

  if (!user) {
    res.status(401).json({ msg: "el usuario no existe" });
    return next();
  }

  if (bcrypt.compareSync(String(password), String(user.password))) {

    //Crear jwt
    const token = jwt.sign({
      id: user._id,
      name: user.name,
      email: user.email
    }, process.env.JWRSECRET, {
      expiresIn: "8h"
    })

    res.json({ token })

  } else {
    res.status(401).json({ msg: "password incorrectro" })
  }
}


exports.usuarioAutenticado = async (req, res, next) => {

  

}