// Paso 1: Declarar la variable kelvin
const kelvin = 293;
console.log(kelvin);

// Paso 2: Convertir Kelvin a Celsius
const celsius = kelvin - 273;
console.log(celsius);

// Paso 3: Convertir Celsius a Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Paso 4: Redondear el valor de Fahrenheit hacia abajo
fahrenheit = Math.floor(fahrenheit);

// Paso 5: Imprimir la temperatura en Fahrenheit
console.log(`La temperatura es ${fahrenheit} grados Fahrenheit.`);

// Paso 6: Convertir Celsius a la escala Newton
let newton = celsius * (33 / 100);

// Paso 7: Redondear el valor de Newton hacia abajo
newton = Math.floor(newton);

// Paso 8: Imprimir la temperatura en Newton
console.log(`La temperatura es ${newton} grados Newton.`);