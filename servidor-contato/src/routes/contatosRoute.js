const express = require("express")
const router = express.Router()
var  bodyParser  = require ("body-parser") 
const controller = require("../controller/contatosController")

router.get("/", controller.getAll) //essa rota puxa o index
//router.get("/:id", controller.getById) // essa rota busca o id do contato
router.post("/criar", bodyParser.json(), controller.add)

router.post("/nome", controller.getAll)


module.exports = router


