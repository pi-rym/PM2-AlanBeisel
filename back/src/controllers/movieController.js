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

    createMovie: async (req, res) => {
        const {title} = req.body;
        try {
            await moviesService.createMovie(title);
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