
const titulo = document.getElementById("titulo");


function cambiarTexto() {
    titulo.textContent = "Hola Mundo con JavaScript";
}


function cambiarColor() {
    titulo.style.color = "red";
}


function cambiarAlineacion() {
    titulo.style.textAlign = "center";
}


let nuevoTexto = null;


function crearTexto() {
    
    if (!nuevoTexto) {
        nuevoTexto = document.createElement("p");
        nuevoTexto.textContent = "JavaScript permite crear páginas dinámicas";
        document.body.appendChild(nuevoTexto);
    }
}


function borrarTexto() {
  
    if (nuevoTexto) {
        document.body.removeChild(nuevoTexto);
        nuevoTexto = null;
    }
}


document.getElementById("btnCambiarTexto").addEventListener("click", cambiarTexto);
document.getElementById("btnCambiarColor").addEventListener("click", cambiarColor);
document.getElementById("btnCambiarAlineacion").addEventListener("click", cambiarAlineacion);
document.getElementById("btnCrearTexto").addEventListener("click", crearTexto);
document.getElementById("btnBorrarTexto").addEventListener("click", borrarTexto);
