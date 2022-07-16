// Manipulando Arrays

let techs = ["html", "css", "js"];
console.log("Array original: "+techs);
// adicionar um item no fim
techs.push("nodejs");
console.log("Item adicionadono fim: "+techs);
// adicionar no começo
techs.unshift("sql");
console.log("Item adicionado no início: "+techs);
// remover do fim
techs.pop();
console.log("Remove do fim: "+techs);
// remover do começo
techs.shift();
console.log("Remove do início: "+techs);
// pegar somente alguns elementos do array
console.log("Elemento (1): "+techs[1]);
console.log("Elemento (2): "+techs[2]);
//ou
console.log(techs.slice(1,3));
// remover 1 ou mais itens em quelquer posição do array
techs.splice(1, 2);
console.log("Remove dois itens do array: css e js ==> "+techs);
// encontrar a posição de um elemento no array
let index = techs.indexOf(1);
console.log("Encontrando o item de índice 1: "+techs);
