// Operador Condicional (Ternário)

/*Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.*/

//Funciona da seguinte forma;

// condição ? valor1 : valor2
// Exemplo de uso:

// Café da manhã top
let pao = true;
let queijo = false;

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'; // false
console.log(niceBreakfast);

const niceBreakfast1 = pao || queijo ? 'Café top' : 'Café ruim'; // true
console.log(niceBreakfast1);

// Maior que 18

let age = 16;
const canDrive = age >= 18 ? "can drive" : "can't drive";
console.log(canDrive);
