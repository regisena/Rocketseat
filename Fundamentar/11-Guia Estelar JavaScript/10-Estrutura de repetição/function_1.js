// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("========================");
for(let i = 10; i >= 1; i--){
    console.log(i);
}
console.log("========================");
for(let i = 1; i <= 10; i++){
    if(i === 6){
        console.log("break: "+i);
        break;
    }
    
    console.log(i);
}
console.log("========================");
for(let i = 1; i <= 10; i++){
    if(i === 6){
        console.log("continue: "+i);
        continue;
    }
    
    console.log(i);
}