const express = require("express") //chamando o express
const router = express.Router() // chamado o router

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Reprograma - Lista de contatos",
    version: "1.0.0"
  })
})

module.exports = router
