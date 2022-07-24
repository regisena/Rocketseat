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
    
    const existsC = degree.toUpperCase().includes('C');
    const existsF = degree.toUpperCase().includes('F');

    if(!existsC && !existsF){
        throw new Error("Grau não identificado!");
    }else if(existsC){
        console.log("Celsius");
    } else{
        console.log("Fahrenheit");
    }
}

try {
    converteUnidades("50F");
    converteUnidades("122C");
    converteUnidades("50");
} catch (error) {
    console.log(error);   
}