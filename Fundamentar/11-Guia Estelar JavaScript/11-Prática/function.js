/*

    Sistema de notas escolares
    
Descrição
Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

Desafio:

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F


*/

function converteNotas(nota){
    let notaConvertida = 0;
    if(nota < 60){
        notaConvertida = "nota F";
    }else if(nota > 60 && nota < 69){
        notaConvertida = "nota D";
    }else if(nota > 70 && nota < 79){
        notaConvertida = "nota C";
    }else if(nota > 80 && nota < 89){
        notaConvertida = "nota B";
    }else if(nota > 90){
        notaConvertida = "nota A";
    }

    return notaConvertida;
}

console.log(converteNotas(991));