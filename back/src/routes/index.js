
const {Router} = require("express");
const movieRouter = require("./movieRouter")

const router = Router();

router.use("/movies", movieRouter);

module.exports = router;