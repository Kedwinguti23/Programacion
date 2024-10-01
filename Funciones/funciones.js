//Ejercicio 1
function suma(a, b) {
    return a + b;
}

console.log(suma(5, 7));

//Ejercicio 2
function mayorNumero(array) {
    return Math.max(...array);
}


console.log(mayorNumero([1, 5, 3, 9, 2]));

//Ejercicio 3
function contarVocales(str) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;
    
    for (let letra of str) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("Hola Mundo")); 

//Ejercico 4
function stringsEnMayusculas(array) {
    return array.map(str => str.toUpperCase());
}

console.log(stringsEnMayusculas(["hola", "mundo"])); 

//Ejercicio 5
function esPrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(7)); 
console.log(esPrimo(10)); 

