// function hoisting, sofre elevação

sayName();

function sayName(){
    console.log("Reginaldo");
}

console.log("//=================================================");

/*
function.js:11 Uncaught ReferenceError: Cannot access 'sayName1' before initialization
    at function.js:11:1, por causa do const
*/
sayName1();

const sayName1 = function (){
    console.log("Reginaldo");
}