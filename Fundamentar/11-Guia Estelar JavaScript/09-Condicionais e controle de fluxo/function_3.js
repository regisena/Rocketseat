// switch
/*
switch (expression) {
    case value1:
        
        break;

    case value2:
        
        break;
    
    default:
        break;
}
*/

let expression = "a";
switch (expression) {
    case 'a':
        console.log("a");
        break;
    case 'b':
        console.log("b");
        break;
    
    default:
        console.log("default");
        break;
}

function calculate(number1, operator, number2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = number1+number2;
            break;
        case "-":
            result = number1-number2;
            break;
        case "*":
            result = number1*number2;
            break;
        case "/":
            result = number1/number2;
            break;     
        default:
            result = "não implementado";
            break;
    }

    return result;
}

console.log(calculate(4,"+",8));