// function scope
let subject;

function createThink(subject){
    return subject;
}

console.log("variável: " + subject); // undefined

console.log("//==========================================1");

let subject1 = "create video";

function createThink(subject1){ // <== este subject está no escopo da função
    subject1 = "study"; // retirando o parâmetro acima, o escopo sobe de nível para o let subject1
    return subject1;
}

console.log("variavel_1: " + subject1);
console.log("chamando a função: " + createThink(subject1));
console.log("variavel_2: " + subject1);

console.log("//==========================================2");

let subject2 = "create video";

function createThink(){ // <== este subject está no escopo da função
    subject2 = "study"; // retirando o parâmetro acima, o escopo sobe de nível para o let subject1
    return subject2;
}

console.log("variavel_1: " + subject2); // undefined
console.log("chamando a função: " + createThink(subject2));
console.log("variavel_2: " + subject2);