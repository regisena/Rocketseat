/*
Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.
*/
// throw (disparar/lançar)

function sayMyName(name = "") {
    if(name === ""){
        throw "Nome é obrigatório";
    }

    console.log("depois do erro");
}
// try... catch (tentar... pegar)
try {
    sayMyName("");
} catch (error) {
    console.log(error);
}

console.log("após a função de erro");