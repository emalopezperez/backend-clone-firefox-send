const express = require("express")
const router = express.Router()
const filesControllers = require("../controllers/filesControllers")
const auth = require("../middleware/auth")


router.post("/",
  auth,
  filesControllers.uploadFiles
)

router.delete("/:id",
  filesControllers.deleteFile
)

module.exports = router