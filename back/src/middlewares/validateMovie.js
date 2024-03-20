const validateMovie = (req, res, next) => {
    const {title, director, year, duration, rate, genre, poster} = req.body;

    if(!title || !director || !year || !duration || !rate || !genre || !poster) {
        return res.status(400).json({
            error: "faltan datos",
        })
    }
        else {
        next();
        }
        
};


module.exports= validateMovie;