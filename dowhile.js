//mprimir números del 1 al 10 usando while
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//Sumar los primeros 10 números usando do...while
let suma = 0;
let j = 1;

do {
    suma += j;
    j++;
} while (j <= 10);

console.log(`La suma de los primeros 10 números es: ${suma}`);

// Números pares del 2 al 20 usando while
let k = 2;
while (k <= 20) {
    console.log(k);
    k += 2;
}

//Contador regresivo desde 10 hasta 1 usando do...while
let l = 10;
do {
    console.log(l);
    l--;
} while (l >= 1);

//Encontrar el primer múltiplo de 7 mayor que 10 usando while
let m = 11; // Comenzamos desde el número mayor que 10
while (m % 7 !== 0) {
    m++;
}
console.log(`El primer múltiplo de 7 mayor que 10 es: ${m}`);

//Imprimir números impares hasta 15 usando do...while
let n = 1;
do {
    if (n % 2 !== 0) {
        console.log(n);
    }
    n++;
} while (n <= 15);

//Contar cuántas veces aparece un número en un array usando while
let array = [1, 2, 3, 4, 3, 2, 3, 4, 5];
let numeroBuscado = 3;
let contador = 0;
let o = 0;

while (o < array.length) {
    if (array[o] === numeroBuscado) {
        contador++;
    }
    o++;
}

console.log(`El número ${numeroBuscado} aparece ${contador} veces en el array.`);


//Sumar todos los elementos de un array usando do...while
let array2 = [1, 2, 3, 4, 5];
let sumaArray = 0;
let p = 0;

do {
    sumaArray += array2[p];
    p++;
} while (p < array2.length);

console.log(`La suma de los elementos del array es: ${sumaArray}`);

//Generar una secuencia de Fibonacci hasta el número 20 usando while
let fib1 = 0, fib2 = 1;
console.log(fib1);
while (fib2 <= 20) {
    console.log(fib2);
    let siguiente = fib1 + fib2;
    fib1 = fib2;
    fib2 = siguiente;
}
