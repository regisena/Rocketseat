/*

    Function constructor

        * expressão new
        * criar um novo objeto
        * this keyword
*/

function Person(name){
    this.name = name;
}

const reginaldo = new Person("Regi");
console.log(reginaldo);

const melissa = new Person("Mel");
console.log(melissa);

console.log("==========================================");

function Person1(name){
    this.name = name;
    this.walk = function(){
        return this.name + " está andando...";
    }
}

const reginaldo1 = new Person1("Regi");
console.log(reginaldo1);
console.log(reginaldo1.walk());

const melissa1 = new Person1("Mel");
console.log(melissa1);
console.log(melissa1.walk());
