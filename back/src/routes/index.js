// aqui vamos a definir las rutas a atravez de las cuales nos podemos comunicar

//tengo definida la solicitud a GET // users


const {Router} = require("express");
const {testController} = require("../controllers/index");
const server = require("../server");
const router = Router();

router.get("/movies", testController)

module.exports = router;