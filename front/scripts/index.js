const renderCards = require("./renderCards")

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    renderCards(data);
});


document.getElementById("limpiarBtn").addEventListener("click", limpiarFormulario);

function limpiarFormulario() {
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("director").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("imageLink").value = "";
}



