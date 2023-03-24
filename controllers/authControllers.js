const UserScheme = require("../models/Usuario");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: '.env' })

exports.autenticarUsuario = async (req, res, next) => {
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
      name: user.name
    }, process.env.JWRSECRET, {
      expiresIn: "8h"
    })

    res.json({ token })

  } else {
    res.status(401).json({ msg: "password incorrectro" })
  }
}


exports.usuarioAutenticado = async (req, res) => {

}