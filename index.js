
const express = require("express")
const dbConnect = require("./config/db")

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/users", require("./routes/users"))

app.listen(PORT, (req, res) => {
  console.log("servidor levantado en el porto 300")
})

dbConnect() // Conecta a la base de datos MongoDB