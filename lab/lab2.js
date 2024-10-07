
const notas = [85, 90, 78, 92, 88]; 

function calcularPromedio(notasArray) {
    let suma = 0;
    
    
    for (let i = 0; i < notasArray.length; i++) {
        suma += notasArray[i];
    }


    const promedio = suma / notasArray.length;
    
    
    return promedio;
}


const promedioFinal = calcularPromedio(notas);
console.log("El promedio de las notas de " + nombre + " es: " + promedioFinal);
