const {Router} = require("express");
const movieController = require("../controllers/movieController");
const validateMovie = require("../middlewares/validateMovie");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);

movieRouter.get("/byName" , movieController.getMovieByTitle)

movieRouter.post("/agregar", validateMovie, movieController.createMovie);

movieRouter.get("/:id", movieController.getMoviesById);


module.exports = movieRouter;