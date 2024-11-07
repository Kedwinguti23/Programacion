// Definir el objeto alumno con las materias y calificaciones
const estudiante = {
    nombre: "Luis Rodriguez",
    ingles: 85,
    programacion: 90,
    matematica: 78,
    // Método para calcular el promedio de las calificaciones
    calcularPromedio: function() {
        let promedio = (this.ingles + this.programacion + this.matematica) / 3;
        return promedio.toFixed(2); // Redondear a dos decimales
    }
};

// Imprimir el nombre y el promedio del alumno
console.log("Nombre del alumno:", alumno.nombre);
console.log("Promedio de calificaciones:", alumno.calcularPromedio());

//ejercicio2
// Requerir la librería prompt-sync
const prompt = require('prompt-sync')();

// Definir el objeto precioDescuento con propiedades precio, descuento y el método neto
const precioDescuento = {
    precio: 0,
    descuento: 0,
    // Método para calcular el precio neto aplicando el descuento
    neto: function() {
        return (this.precio - (this.precio * (this.descuento / 100))).toFixed(2);
    }
};

// Solicitar al usuario el precio y descuento
precioDescuento.precio = parseFloat(prompt("Ingrese el precio: "));
precioDescuento.descuento = parseFloat(prompt("Ingrese el descuento (%): "));

// Calcular el precio neto y mostrar el resultado
console.log("Precio neto con descuento aplicado:", precioDescuento.neto());

