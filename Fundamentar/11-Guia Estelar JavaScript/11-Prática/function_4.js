/**
 *  ### Celsius em fahrenheit
 * 
 *  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
 * 
 * C = (F - 32) * 5/9
 * 
 * F = C * 9/5 + 32
 * 
 */

function converteUnidades(degree){
    
    let existsC = degree.touppercase().includes('C');
    let existsF = degree.toUpperCase().includes('F');

    if(!existsC && !existsF){
        console.log("Converte unidades");
    }




    existsC ? C = (F - 32) * 5/9 : C = (F - 32) * 5/9;
}

converteUnidades("122F");
converteUnidades("fahrenheit",50);
converteUnidades("",50);