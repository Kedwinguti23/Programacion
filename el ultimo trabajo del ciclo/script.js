// URL de la API de frases motivacionales
const API_URL = 'http://api.quotable.io/random';

// Elementos del DOM
const boton = document.getElementById('obtener-frase-btn');
const fraseContenedor = document.getElementById('frase');
const autorContenedor = document.getElementById('autor');

// Función para obtener una frase de la API
async function obtenerFrase() {
    try {
        // Mostrar mensaje de carga mientras se obtiene la frase
        fraseContenedor.textContent = 'Cargando...';
        autorContenedor.textContent = '';

        // Hacer la solicitud a la API
        const respuesta = await fetch(API_URL);
        
        // Verificar si la respuesta es correcta
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la frase. Intenta de nuevo.');
        }

        // Procesar la respuesta como JSON
        const datos = await respuesta.json();

        // Extraer la frase y el autor de los datos
        const frase = datos.content;
        const autor = datos.author || 'Autor desconocido';

        // Mostrar la frase y el autor en el contenedor
        fraseContenedor.textContent = `"${frase}"`;
        autorContenedor.textContent = `- ${autor}`;
    } catch (error) {
        // Mostrar mensaje de error
        fraseContenedor.textContent = 'Ocurrió un error al obtener la frase.';
        autorContenedor.textContent = '';
        console.error('Error:', error);
    }
}

// Asignar la función al botón
boton.addEventListener('click', obtenerFrase);
