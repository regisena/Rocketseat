/**
 *  ### Celsius em fahrenheit
 * 
 *  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
 * 
 * C = (F - 32) * 5/9
 * 
 * F = C * 9/5 + 32
 * 
 * Aqui foi utilizado o tabnine
 */

function converteUnidades(degree){
    
    let existsC = degree.toUpperCase().includes('C');
    let existsF = degree.toUpperCase().includes('F');

    if(!existsC && !existsF){
        console.log("Unidade inválida!");
    }else if(existsC){
        console.log("Celsius");
    } else{
        console.log("Fahrenheit");
    }
    //console.log("Teste");
}

converteUnidades("122C");
converteUnidades("50F");
// converteUnidades("",50);