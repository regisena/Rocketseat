/*
    ### Sistema de gastos familiar

        Crie um objeto que posuirá 2 propriedades, ambas do tipo array:
            * receitas: []
            * despesas: []
        Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/


function fluxoCaixaFamiliar(receitas, despesas){
    let totalReceita = 0;
    let totalDespesa = 0;
    
    for(receita of receitas){
        //console.log("R: "+receita);
        totalReceita += receita;
    }
    console.log("TR: "+totalReceita);
    for(despesa of despesas){
        //console.log("D: "+despesa);
        totalDespesa += despesa;
    }
    console.log("TD: "+totalDespesa);
    
    if(totalReceita > totalDespesa){
        saldo = "Saldo positivo";
    }else if(totalReceita < totalDespesa){
        saldo = "Saldo negativo";
    }else{
        saldo = "Saldo equilibrado";
    }
    
    return saldo;
    //console.log(saldo);
}
let receitas = [];
let despesas = [];

receitas = [10,20];
despesas = [5,10];
console.log(fluxoCaixaFamiliar(receitas, despesas)); // saldo positivo

receitas = [1,2];
despesas = [5,10];
console.log(fluxoCaixaFamiliar(receitas, despesas)); // saldo negativo

receitas = [10,20];
despesas = [20,10];
console.log(fluxoCaixaFamiliar(receitas, despesas)); // saldo equilibrado
