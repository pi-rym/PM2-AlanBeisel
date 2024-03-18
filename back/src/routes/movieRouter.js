const {Router} = require("express");
const movieController = require("../controllers/movieController");
const validateMovie = require("../middlewares/validateMovie");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);

movieRouter.post("/", validateMovie, movieController.createMovie);

module.exports = movieRouter;