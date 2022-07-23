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

function converteUnidades(unidade,temperatura){
    let C = temperatura;
    let F = temperatura;
    switch (unidade) {
        case "celsius":
            C = (F - 32) * 5/9;
            console.log(F+"F"+" => "+C+"ºC");
        break;
            
        case "fahrenheit":
            F = C * 9/5 + 32;
            console.log(C+"ºC => "+F+"F");
        break;
    
        default:
            console.log("Nenhuma escala definida");
            break;
    }
}

converteUnidades("celsius",122);
converteUnidades("fahrenheit",50);
converteUnidades("",50);