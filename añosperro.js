// Paso 1: Almacenar mi edad en años humanos
let myAge = 18; // Tengo 18 años, así que lo usaré como referencia

// Paso 2: Los primeros dos años de un perro cuentan como 10.5 años cada uno
let earlyYears = 2;

// Paso 3: Multiplicar los primeros dos años por 10.5 para convertir a años de perro
earlyYears *= 10.5;

// Paso 4: Calcular los años restantes después de los primeros dos años
let laterYears = myAge - 2;

// Paso 5: Multiplicar los años restantes por 4 para convertir a años de perro
laterYears *= 4;

// Paso 6: Verificar los valores calculados
console.log(earlyYears); // Debería ser 21
console.log(laterYears); //  Debería ser 64 (16 años restantes * 4 años de perro por año)


// Paso 7:Al sumar earlyYears y laterYears se obtiene la edad en años de perro
let myAgeInDogYears = earlyYears + laterYears;

// Paso 8: Aquí convierto mi nombre a minúsculas
let myName = 'Kedwin'.toLowerCase(); // Utilizamos mi nombre real para la cadena de texto siguiente

// Paso 9: En este paso,imprimo la información final usando interpolación de cadenas
console.log(`Mi nombre es ${myName}. Tengo ${myAge} años en años humanos, que son ${myAgeInDogYears} años en años de perro.`);
