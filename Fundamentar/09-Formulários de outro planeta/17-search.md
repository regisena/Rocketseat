# \<input type="search" />

- Para campos de busca
- É igual ao campo do tipo 'text' mas poderá ser um pouco diferente dependendo do user agent

# Atributos

- list / <\datalist>
- pattern
- aria-label (opção à tag label)

```javascript

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // retorna 4, que é o índice da primeira letra maiúscula "J"
console.log(str.search(reDot)) // retorna -1 pois não conseguiu encontrar o ponto "."

```
```html

<datalist id="searchterms">
    <option>Mac</option>
    <option>Win</option>
    <option>Linux</option>    
</datalist>
<input type="search" name="q" list="searchterms">
===
<label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q">

<button>Search</button>

```

[Referência:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search)