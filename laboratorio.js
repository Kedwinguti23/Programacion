// Kedwin Isaí Gutiérrez Velásquez
let camisetas = 120;
let pantalones = 90;
let zapatos = 100;

// Calcular el total de productos en el inventario
let inventario = camisetas + pantalones + zapatos;

// Imprimir el total de productos en el inventario
console.log("Total de productos en el inventario: " + inventario);

// Verificar si es necesario reponer algún producto
if (camisetas < 100) {
    console.log("Es necesario reponer camisetas.");
} else if (pantalones < 100) {
    console.log("Es necesario reponer pantalones.");
} else if (zapatos < 100) {
    console.log("Es necesario reponer zapatos.");
} else {
    console.log("No es necesario reponer ningún producto.");
}
