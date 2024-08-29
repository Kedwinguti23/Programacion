//ejercicio 1
let numero = 9; 
let resultado = "";

for (let i = 0; i < numero; i++) {
    if (i % 2 === 0) { 
        resultado += i + " ";
    }
}

console.log(`Los números pares por debajo de ${numero} son: ${resultado}`);

//ejercicio 2 
let nume = 5; 
let resolution = "";

for (let i = 1; i <= nume; i++) {
    for (let j = 1; j <= i; j++) {
        resolution += "*"; 
    }
    resolution += "\n"; 
}

console.log(resolution);

//ejercicio 3
let num = 5; 
let suma = 0;

for (let i = 1; i <= num; i++) {
    suma += i; 
}

console.log(`Los enteros de 0 a ${num} suman ${suma}`);


//ejercicio 4
let numeros = [5, 9, 10, 12]; 
let sum = 0;

for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i]; 
}

let media = sum / numeros.length; 

console.log(`La media es ${media}`);


//ejercicio 5
let ou = 3; 
for (let i = 1; i <= 10; i++) { 
    let solucion = ou * i; e
    console.log(`${ou} x ${i} = ${solucion}`); 
}
