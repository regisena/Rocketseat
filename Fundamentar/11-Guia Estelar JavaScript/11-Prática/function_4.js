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
    
    // fluxo de erro
    if(!existsC && !existsF){
        throw new Error("Grau não identificado!");
    }
    
    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = "C";

    // fluxo alternativo, C -> F
    if(existsC){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = formula = celsius => celsius * 9/5 + 32;
        degreeSign = "F";
    }

    return formula(updatedDegree) + degreeSign;
}

try {
    console.log(converteUnidades("50F"));
    console.log(converteUnidades("10C"));
    console.log( converteUnidades("50"));
} catch (error) {
    console.log(error);   
}