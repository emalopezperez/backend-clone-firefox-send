const express = require("express")
const router = express.Router()
const filesControllers = require("../controllers/filesControllers")
const auth = require("../middleware/auth")


//Subida de archivos


router.post("/",
  filesControllers.uploadFiles

)

router.delete("/:id",
  filesControllers.deleteFile
)

module.exports = router