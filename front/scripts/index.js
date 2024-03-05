console.log(tempData);



    tempData.map(obj => {
        // Crea un contenedor div para cada película
        const target = document.createElement("div");
        target.classList.add("movie-card"); 

        // Crea un elemento h3 para el título de la película
        const movieTitle = document.createElement("h4");
        
        const movieTitleLink = document.createElement("a");
        movieTitleLink.textContent = obj.title; 
        movieTitleLink.href = "#";

        // Crea un elemento img para el póster de la película
        const poster = document.createElement("img"); // Aquí se corrigió el nombre de la variable
        poster.src = obj.poster;

        // Añade los elementos al contenedor
        movieTitle.appendChild(movieTitleLink);
        target.appendChild(movieTitle);
        target.appendChild(poster);

        const div = document.getElementById("div2");

        div.appendChild(target);
    });

