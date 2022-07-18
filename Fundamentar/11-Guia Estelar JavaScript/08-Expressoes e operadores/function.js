// Operador Condicional (Ternário)

/*Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.*/

//Funciona da seguinte forma;

condição ? valor1 : valor2
//Exemplo de uso:

// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)