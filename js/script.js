let valor1 = 0;
let valor2 = 1;
let valor_serie;


while (true) {
    tope = prompt("Proporcione un numero para la serie fibonacci: ");

    if (isNaN(tope)) {
        alert("Proporcione unicamente valores numericos.");
    } else {
        break;
    }
}
let serie = [];

for (let i = 0; i < tope; i++) {
        serie.push(valor1);
        valor_serie = valor1 + valor2;
		valor1 = valor2;
		valor2 = valor_serie;
	
}



console.log("Serie de fibonacci: ");
console.log(serie.join(', '));