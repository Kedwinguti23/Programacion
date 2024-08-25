// Kedwin Isaí Gutiérrez Velásquez
let camisetas = 120;
let pantalones = 90;
let zapatos = 100;

// Calculo de el total de productos en el inventario
let inventario = camisetas + pantalones + zapatos;

// el total de productos en el inventario impreso en el terminal
console.log("Total de productos en el inventario: " + inventario);

// Verificación para ver si es necesario reponer algún producto
if (camisetas < 100) {
    console.log("Es necesario reponer camisetas.");
} else if (pantalones < 100) {
    console.log("Es necesario reponer pantalones.");
} else if (zapatos < 100) {
    console.log("Es necesario reponer zapatos.");
} else {
    console.log("No es necesario reponer ningún producto.");
}
