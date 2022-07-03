# \<input type="search" />

- Para campos de busca
- É igual ao campo do tipo 'text' mas poderá ser um pouco diferente dependendo do user agent

# Atributos

- list / <\datalist>
- pattern
- aria-label

```javascript

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // retorna 4, que é o índice da primeira letra maiúscula "J"
console.log(str.search(reDot)) // retorna -1 pois não conseguiu encontrar o ponto "."

```

[Referência:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search)