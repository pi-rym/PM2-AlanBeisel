// en este  modulo van a estar las funciones que establecen las logicas de negocio de cada una de las rutas

const testController = (req, res) => {
    res.status(200).send("Próximamente estarán disponibles los datos de películas")
};


module.exports = {
    testController,
};