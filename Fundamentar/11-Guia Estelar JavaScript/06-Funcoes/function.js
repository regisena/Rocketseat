// expression function
// anonymous function

const sum = function(){

}

// executar a função acima
sum();

// parâmetros (parameters) 
const somar = function(number1, number2){
    console.log(number1 + number2);
}

// executar a função acima
somar(4, 3); // argumentos (arguments)

// outros exemplos
somar(1,1);
somar(5,4);

//===================================================

// parâmetros (parameters) 
const somar2 = function(number1, number2){
    console.log(number1 + number2);
}

// declarando os argumentos
let number1 = 2;
let number2 = 8;

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${somar2(number1, number2)}`);
