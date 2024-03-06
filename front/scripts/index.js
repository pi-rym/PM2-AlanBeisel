const div = document.getElementById("div2");

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    renderCards(data);
});


const renderCards = (data) => {
data.map(obj => {

const contenedorPeli = document.createElement("div");
contenedorPeli.classList.add("movie-card"); 

const poster = document.createElement("img"); 
poster.src = obj.poster;

const movieTitleLink = document.createElement("a");
movieTitleLink.textContent = obj.title; 
movieTitleLink.href = "#";

const movieTitle = document.createElement("h4");

const movieYear = document.createElement("p");
movieYear.textContent = "Año: " + obj.year; 

const movieDirector = document.createElement("p");
movieDirector.textContent = "Director: " + obj.director;

contenedorPeli.appendChild(poster);
contenedorPeli.appendChild(movieTitle);
contenedorPeli.appendChild(movieYear);
contenedorPeli.appendChild(movieDirector);
movieTitle.appendChild(movieTitleLink);

div.appendChild(contenedorPeli);
});

};


