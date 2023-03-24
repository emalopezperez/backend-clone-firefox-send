require("dotenv").config({ path: '.env' })
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization')

  if (authHeader) {

    const token = authHeader.split(' ')[1]

    try {
      const user = jwt.verify(token, process.env.JWRSECRET)
      
      res.json({ user  })

    } catch (err) {
      console.log('error')
    }
  }

  return next()
}