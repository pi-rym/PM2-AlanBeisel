

function limpiarFormulario() {
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("director").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("imageLink").value = "";
}



module.exports = limpiarFormulario;