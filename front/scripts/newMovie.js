const addButton = document.getElementById('add-button');
addButton.addEventListener('click', newMovie);

const limpiarBtn = document.getElementById("limpiarBtn");
limpiarBtn.addEventListener("click", limpiarFormulario);



async function newMovie() {
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const directorInput = document.getElementById('director');
    const durationInput = document.getElementById('duration');
    const genreInput = document.getElementById('genre');
    const rateInput = document.getElementById('rate');
    const imageLinkInput = document.getElementById('imageLink');

    const title = titleInput.value.trim();
    const year = yearInput.value.trim();
    const director = directorInput.value.trim();
    const duration = durationInput.value.trim()
    const genre = genreInput.value.trim();
    const rate = rateInput.value.trim();
    const imageLink = imageLinkInput.value.trim();

    if (!title || !year || !director || !duration || !genre || !rate || !imageLink) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const movieData = {
        title: title,
        year: year,
        director: director,
        duration: duration,
        genre: genre,
        rate: rate,
        imageLink: imageLink
    };

    try {
        const response = await fetch('http://localhost:3000/movies/agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });

        if (!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();
        console.log(data);
        titleInput.value = '';
        yearInput.value = '';
        directorInput.value = '';
        durationInput.value = '';
        genreInput.value = '';
        rateInput.value = '';
        imageLinkInput.value = '';
    } catch (error) {
        console.error('Error:', error);
        alert('error de conexion');
    }
}

function limpiarFormulario() {
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("director").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("imageLink").value = "";
}
