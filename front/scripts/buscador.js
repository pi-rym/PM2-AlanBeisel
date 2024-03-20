//todavia no esta terminado

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form[role="search"]');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Evitar que el formulario se envíe de forma convencional
//         searchMovie(); // Llamar a la función de búsqueda
//     });
// });

// async function searchMovie() {
//     const searchTerm = document.getElementById('searchInput').value.trim();

//     try {
//         const response = await fetch(`http://localhost:3000/movies/byName?name=${searchTerm}`)
//         if (!response.ok) {
//             throw new Error('Error al buscar películas');
//         }
//         const data = await response.json();
//         renderCards(data); // Renderizar las tarjetas con las películas encontradas
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Error al buscar películas');
//     }
// }


