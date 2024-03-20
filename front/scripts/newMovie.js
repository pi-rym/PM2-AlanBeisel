const addButton = document.getElementById('add-button');
addButton.addEventListener('click', newMovie);

const limpiarBtn = document.getElementById("limpiarBtn");
limpiarBtn.addEventListener("click", limpiarFormulario);


async function newMovie() {
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const directorInput = document.getElementById('director');
    const durationInput = document.getElementById('duration');
    const genreCheckboxes = document.querySelectorAll('input[name="genre"]:checked');
    const rateInput = document.getElementById('rate');
    const imageLinkInput = document.getElementById('imageLink');

    const title = titleInput.value.trim();
    const year = yearInput.value.trim();
    const director = directorInput.value.trim();
    const duration = durationInput.value.trim()
    const genre = Array.from(genreCheckboxes).map(checkbox => checkbox.value);
    const rate = rateInput.value.trim();
    const poster = imageLinkInput.value.trim();


    if (!title || !year || !director || !duration || genre.length === 0|| !rate || !poster) {
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
        poster: poster
    };

    // console.log('Datos de la película:', movieData);

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
        genreCheckboxes.forEach(checkbox => checkbox.checked = false);
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
    const genreCheckboxes = document.querySelectorAll('input[name="genre"]');
    genreCheckboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById("rate").value = "";
    document.getElementById("imageLink").value = "";

}

