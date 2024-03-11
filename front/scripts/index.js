const renderCards = require("./renderCards")
const limpiarFormulario = require("./formulario")

const axios = require("axios");
async function fetchData() {
    try {
        const response = await axios.get('https://students-api.2.us-1.fl0.io/movies');
        renderCards(response.data);
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
}

fetchData();

const limpiarBtn = document.getElementById("limpiarBtn");
limpiarBtn.addEventListener("click", limpiarFormulario);