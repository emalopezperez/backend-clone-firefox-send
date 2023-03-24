const multer = require('multer');
const shortid = require('shortid');

const configMulter = {
  limits: { fileSize: 1000000},
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

exports.uploadFiles = async (req, res, next) => {

  upload(req, res, async (error) => {

    if (!error) {
      res.json({ archivo: req.file.filename })

    } else {
      console.log("error")
      return next()
    }
  })
}

exports.deleteFile = async (req, res, next) => {
  console.log("eliminando archivo")
}