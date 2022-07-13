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
