const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs');


exports.uploadFiles = async (req, res, next) => {

  const configMulter = {
    limits: { fileSize: req.user ? 1024 * 1024 * 10 : 1024 * 1024 },
    storage: fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, __dirname + '/../uploads')
      },
      filename: (req, file, cb) => {
        const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, `${shortid.generate()}${extension}`);
      }
    })
  }

  const upload = multer(configMulter).single('archivo');

  upload(req, res, async (error) => {

    if (!error) {
      res.json({ archivo: req.file.filename })

    } else {
      return next()
    }
  })
}

exports.deleteFile = async (req, res, next) => {

  try {
    fs.unlinkSync(__dirname + `/../uploads/${req.archivo}`)
  }catch (err) {
    console.log(err)
  }
}