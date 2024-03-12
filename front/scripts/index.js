const limpiarFormulario = require("./formulario")
const fetchData = require("./handler")

fetchData();

const limpiarBtn = document.getElementById("limpiarBtn");
limpiarBtn.addEventListener("click", limpiarFormulario);