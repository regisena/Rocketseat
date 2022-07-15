// Manipulando Strings e Números

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o amor!";
let myArray = phrase.split(" ");
console.log(myArray);
let phraseWithUndescore = myArray.join("_");
console.log(phraseWithUndescore);