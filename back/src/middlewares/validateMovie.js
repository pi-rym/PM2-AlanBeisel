const validateMovie = (req, res, next) => {
    const {title} = req.body;

    if(!title) {
        return res.status(400).json({
            error: "falta el dato del nombre",
        })
    }
        else {
        next();
        }
        
};


module.exports= validateMovie;