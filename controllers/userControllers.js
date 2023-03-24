const UserScheme = require("../models/Usuario");
const bcrypt = require('bcrypt');
const { validationResult} = require('express-validator');

exports.nuevoUsuario = async (req, res) => {

  //Mostrar mensajes de error express validator
  const errores = validationResult(req)
    if(!errores.isEmpty()){
      return res.status(400).json({errores: errores.array()})
    }
  
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Por favor proporcione correo electrónico y contraseña" });
    }

    const existingUser = await UserScheme.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "Usuario ya registrado" });
    }

    // Hashear password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);

    // Crear usuario
    const newUser = new UserScheme({ email, password: hashedPassword });
    await newUser.save();

    res.json({ msg: "Usuario creado" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Ocurrió un error al crear un nuevo usuario" });
  }
};
