const renderCards = require("./renderCards")

const axios = require("axios");
async function fetchData() {
    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        renderCards(response.data);
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
}



module.exports= fetchData;