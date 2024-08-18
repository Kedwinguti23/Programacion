// Ejercicio 1: Verificar Edad para Ingresar a una Discoteca
let edad = Number (edad); 
edad=18 //he colocado este valor unicamente como prueba
if (edad >= 18) {
    console.log("Puedes ingresar a la discoteca.");
} else if (edad >= 0 && edad < 18) {
    console.log("No puedes ingresar a la discoteca.");
} else {
    console.log("Por favor, ingresa una edad válida.");
}

// Ejercicio 2: Clasificación de Calificaciones
let calificacion = Number (calificación); 
calificacion= 90 //dejaré valores aleatorios solo para utilizarlos como prueba en caso de ser evaluados en el terminal
if (calificacion >= 90 && calificacion <= 100) {
    console.log("La calificación es: A");
} else if (calificacion >= 80 && calificacion < 90) {
    console.log("La calificación es: B");
} else if (calificacion >= 70 && calificacion < 80) {
    console.log("La calificación es: C");
} else if (calificacion >= 60 && calificacion < 70) {
    console.log("La calificación es: D");
} else if (calificacion >= 0 && calificacion < 60) {
    console.log("La calificación es: F");
} else {
    console.log("Por favor, ingresa una calificación válida.");
}

// Ejercicio 3: Determinar el Día de la Semana
let numeroDia = Number (numeroDia);
numeroDia=3
let diaSemana;

switch (numeroDia) {
    case 1:
        diaSemana = "Lunes";
        break;
    case 2:
        diaSemana = "Martes";
        break;
    case 3:
        diaSemana = "Miércoles";
        break;
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sábado";
        break;
    case 7:
        diaSemana = "Domingo";
        break;
    default:
        diaSemana = "Número inválido, por favor ingresa un número entre 1 y 7.";
}

console.log("El día de la semana es: " + diaSemana);

// Ejercicio 4: Evaluación de Números
let numero = Number (numero);
numero=8
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}
