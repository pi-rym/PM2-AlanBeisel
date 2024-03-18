const mongoose = require("mongoose")


const dbCon = async () => {
   await mongoose.connect("mongodb+srv://alanbeisel:FvfjZTb40xk1jl5Q@miclustermovies.ewz5teh.mongodb.net/miPrimerDB?retryWrites=true&w=majority&appName=miClusterMovies")
};

module.exports = dbCon;