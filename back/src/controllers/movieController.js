const moviesService = require("../services/moviesService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({error: "error interno del servidor"});
        }

    },
    getMoviesById: async (req, res) => {
        const {id} = req.params;
        const movie= await moviesService.getMovieById(id);
        res.status(200).json(movie)
    },

    getMovieByTitle: async (req, res) =>{
        const {title} = req.body;
        const movie =  await moviesService.findMovieByName(title);
        res.status(200).json(movie)
    },

    createMovie: async (req, res) => {
        const {title, year, director, duration, genre, rate, poster } = req.body;
        try {
            await moviesService.createMovie({title, year, director, duration, genre, rate, poster});
            res.status(201).json({
                messaje: "pelicula creada correctamente"
            });
            
        } catch (error) {
            res.status(500).json({
                error: "error al crear pelicula"
            });
        }
    },

};