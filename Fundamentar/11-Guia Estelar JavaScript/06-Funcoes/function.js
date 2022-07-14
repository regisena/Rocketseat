/*

    Function constructor

        * expressão new
        * criar um novo objeto
        * this keyword
*/

function Person(name){
    this.name = name;
    this.walk = function(){
        return this.name + " está andando...";
    }
}

// usando a propriedade name
const myName = new Person("Reginaldo");
const theNameWife = new Person("Melissa");

console.log(myName);
console.log(theNameWife);

console.log("==============================================");

// usando a propriedade name e walk
const myName1 = new Person("Reginaldo");
const theNameWife1 = new Person("Melissa");

console.log(myName1.walk());
console.log(theNameWife1.walk());
