//Ejercicio 2
let peliculas = [
    { titulo: 'Interstellar', genero: 'Ciencia ficción' },
    { titulo: 'Harry Potter y el prisionero de Azkabán', genero: 'Fantasía' },
    { titulo: 'Stalingrado parte 1', genero: 'Bélico' },
    { titulo: 'El viaje de chihiro', genero: 'Animación' },
    { titulo: 'Jeepers Creepers', genero: 'Terror' }
];

let generoDeseado = 'Animación';  // Es posible cambiar según la preferencia

let peliculaRecomendada = null;

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero === generoDeseado) {
        peliculaRecomendada = peliculas[i].titulo;
        break;
    }
}

if (peliculaRecomendada) {
    console.log(`Te recomendamos: ${peliculaRecomendada}`);
} else {
    console.log("No hay películas disponibles para el género seleccionado.");
}
