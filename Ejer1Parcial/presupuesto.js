//Kedwin Isaí Gutiérrez Velásquez
//Ejercicio 1
let gastosFamilia = [
    { categoria: 'Comida', valor: 200 },
    { categoria: 'Transporte', valor: 100 },
    { categoria: 'Casa', valor: 300 },
    { categoria: 'Educación', valor: 150 }
];
let ingresoTotalFamiliar = 1000;
let totalGastos = gastosFamilia.reduce((suma, gasto) => suma + gasto.valor, 0);
if (totalGastos < ingresoTotalFamiliar) {
    console.log(`El presupuesto está equilibrado y tienes un ahorro de: $${ingresoTotalFamiliar - totalGastos}`);
} else if (totalGastos === ingresoTotalFamiliar) {
    console.log("El presupuesto está equilibrado y no tienes ahorros.");
} else {
    console.log(`El presupuesto está excedido. Te faltan $${totalGastos - ingresoTotalFamiliar} para cubrir los gastos.`);
}

