```js
// 1. Declare uma variável de nome weight
    let weight;

// 2. Que tipo de dado é a variável acima?
    undefined
    console.log(typeof weight);
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        *  name: String
        *  age: Number (integer)
        *  stars: Number (float)
        *  isSubscribed: Boolean
*/
    let name = "Reginaldo";
    let age = 45;
    let stars = 5.8;
    let isSubscribed = true;

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weght> pelos valores de cada propriedade do objeto
*/

let student = {
    name: "Regi",
    age: "45",
    weight: 82.3
}

console.log(typeof student);

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);

/*
    5. Declare uma varíavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let varArray = [];
/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
varArray = [student];

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(varArray[0]);

/*
    8. Crie um novo student e cologuqe na posição 1 do Array criado na quetão 6.
*/
let newStudent = {
    name: "Melissa",
    age: 23,
    weight: 
}
varArray[1] = newStudent;

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a);
    var a = 1;
*/
irá imprimir o valor undefined, fazendo uso do hosting, já que a está declarado como var que é uma global;

var a;
console.log(a);
a = 1;

```