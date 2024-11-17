// Mensaje con setTimeout
function mensajeConTimeout() {
    setTimeout(() => {
        alert("Hola, bienvenidos a la clase!");
    }, 3000); // 3000 ms = 3 segundos
}

//  Temporizador de Cuenta Regresiva
function temporizadorCuentaRegresiva() {
    let contador = 5;
    let intervalo = setInterval(() => {
        console.log(contador);
        alert(contador); // Muestra el número actual
        contador--;
        if (contador < 0) {
            clearInterval(intervalo);
            console.log("¡Tiempo terminado!");
            alert("¡Tiempo terminado!");
        }
    }, 1000); // 1000 ms = 1 segundo
}

// Mostrar Fecha y Hora Actual Cada Segundo
function mostrarFechaHora() {
    setInterval(() => {
        let ahora = new Date();
        console.log(`Fecha y hora actual: ${ahora}`);
        alert(`Fecha y hora actual: ${ahora}`);
    }, 1000); // Cada segundo
}

// Simulación de Petición de Datos con setTimeout
function simularPeticionDatos() {
    console.log("Obteniendo datos...");
    alert("Obteniendo datos...");
    setTimeout(() => {
        console.log("Datos recibidos: [1, 2, 3, 4, 5]");
        alert("Datos recibidos: [1, 2, 3, 4, 5]");
    }, 2000); // 2000 ms = 2 segundos
}

// Detener un Temporizador Después de 5 Ejecuciones
let contadorTareas = 0;
let intervaloTarea;
function detenerTemporizador() {
    contadorTareas = 0; // Reiniciar el contador
    intervaloTarea = setInterval(() => {
        console.log("Ejecutando tarea...");
        alert("Ejecutando tarea...");
        contadorTareas++;
        if (contadorTareas >= 5) {
            clearInterval(intervaloTarea);
            console.log("Tareas finalizadas.");
            alert("Tareas finalizadas.");
        }
    }, 1000); // Cada segundo
}

