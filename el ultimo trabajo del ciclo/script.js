
const API_URL = 'http://api.quotable.io/random';

const boton = document.getElementById('obtener-frase-btn');
const fraseContenedor = document.getElementById('frase');
const autorContenedor = document.getElementById('autor');

// Función para obtener una frase de la API
async function obtenerFrase() {
    try {
       
        fraseContenedor.textContent = 'Cargando...';
        autorContenedor.textContent = '';

        //  solicitud a la API
        const respuesta = await fetch(API_URL);
        
     
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la frase. Intenta de nuevo.');
        }

     
        const datos = await respuesta.json();

        
        const frase = datos.content;
        const autor = datos.author || 'Autor desconocido';

        r
        fraseContenedor.textContent = `"${frase}"`;
        autorContenedor.textContent = `- ${autor}`;
    } catch (error) {
      
        fraseContenedor.textContent = 'Ocurrió un error al obtener la frase.';
        autorContenedor.textContent = '';
        console.error('Error:', error);
    }
}

// Asignar la función al botón
boton.addEventListener('click', obtenerFrase);
