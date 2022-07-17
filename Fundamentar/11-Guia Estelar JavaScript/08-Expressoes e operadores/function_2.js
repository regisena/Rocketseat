/*
 new
    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String("Meu nome é: ");
name.firstName = "Reginaldo";
name.middleName = " Sena";
name.surName = " do Nascimento"; 
let age = new Number(45);
console.log(name, name.firstName, name.middleName, name.surName, age);

let data = new Date("2022/07/16");
console.log(data.__proto__);//getDate("dd/MM/YYY"));