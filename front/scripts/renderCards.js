
const div = document.getElementById("div2");

const renderCards = (data) => {
    data.map(obj => {
    

    const contenedorPeli = document.createElement("div");
    contenedorPeli.classList.add("card"); 
    
    const poster = document.createElement("img");
    poster.classList.add("card-img-top") 
    poster.src = obj.poster;
    
    const contenedorInfo = document.createElement("div");
    contenedorInfo.classList.add("card-body")
    
    const movieTitleLink = document.createElement("a");
    movieTitleLink.textContent = obj.title; 
    movieTitleLink.href = "#";
    movieTitleLink.classList.add("link-peli")
    
    const movieTitle = document.createElement("h5");
    movieTitle.classList.add("card-title");
    
    const movieYear = document.createElement("p");
    movieYear.textContent = "Año: " + obj.year;
    movieYear.classList.add("card-text") 
    
    const movieDirector = document.createElement("p");
    movieDirector.textContent = "Director: " + obj.director;
    movieDirector.classList.add("card-text")
    
    
    contenedorPeli.appendChild(poster);
    contenedorPeli.appendChild(contenedorInfo)
    contenedorInfo.appendChild(movieTitle);
    contenedorInfo.appendChild(movieYear);
    contenedorInfo.appendChild(movieDirector);
    movieTitle.appendChild(movieTitleLink);
    
    div.appendChild(contenedorPeli);
    });
    
    };

    module.exports = renderCards;
