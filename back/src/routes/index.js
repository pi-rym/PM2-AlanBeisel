// aqui vamos a definir las rutas a atravez de las cuales nos podemos comunicar

//tengo definida la solicitud a GET // users


const {Router} = require("express");
const movieRouter = require("./movieRouter")

const router = Router();

router.use("/movies", movieRouter);

module.exports = router;