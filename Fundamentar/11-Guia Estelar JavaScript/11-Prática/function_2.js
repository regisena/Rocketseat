/*

    Sistema de notas escolares
    
Descrição
Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

Desafio:

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima   -   A
* de 80 a 89        -   B
* de 70 a 79        -   C
* de 60 a 69        -   D
* menor que 60      -   F


*/

function converteNotas(nota){
    let notaConvertida = 0;
    if(nota < 60 && nota >= 0){
        notaConvertida = "nota F";
    }else if(nota >= 60 && nota <= 69){
        notaConvertida = "nota D";
    }else if(nota >= 70 && nota <= 79){
        notaConvertida = "nota C";
    }else if(nota >= 80 && nota <= 89){
        notaConvertida = "nota B";
    }else if(nota >= 90){
        notaConvertida = "nota A";
    }else{
        notaConvertida = "Nota inválida"
    }

    return notaConvertida;
}

console.log(converteNotas(-50));
console.log(converteNotas(5));
console.log(converteNotas(10));
console.log(converteNotas(30));
console.log(converteNotas(60));
console.log(converteNotas(70));
console.log(converteNotas(80));
console.log(converteNotas(90));
console.log(converteNotas(100));
console.log(converteNotas(1000));