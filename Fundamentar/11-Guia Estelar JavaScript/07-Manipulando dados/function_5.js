// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let num = 3.1415;
console.log(num.toFixed(2)); // tranformando o número em 2 casas decimais
console.log(num.toFixed(3).replace(".",",")); // trocando ponto por vírgula, porém é uma string neste momento
console.log(Number(num.toFixed(2).replace(".",","))); // aqui é um Number, porém o resultado é NaN, pois vírgula não faz parte de um numeral