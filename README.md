CSS
# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância


### 1. Origem do estilo

inline > tag style > tag link

### 2. Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

|Força|Descrição|
|:---|:---|
|0    |   Universal selector, combinators e negation pseudo-class (:not())|
|1    |   Element type selector e pseudo-element (::before, ::after)|
|10   |   Class e attribute selectors ([type="radio"])|
|100  |   ID selector|
|1000 |   Inline|

### 3. Importância

* cuidade, evite o uso
* não é considerada uma boa prática
* quebra o fluxo natural da cascata

# At-rules

* EStá relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

- @import   /* incluir um CSS externo */
- #media    /* regras condicionais para dispositivos */
- @font-face    /* fontes externas */
-@keyframes /* Animation */

```css
@import "http://local.com/style.css"; ou 
@import url("http://local.com/style.css");

@media (min-width: 500px){
    /* rules here */
}

@font-face{
    /* rules here */
}

@keyframes nameofanimation{
    /* rules here */
}
```

# Shorthand

* junção de propriedades
* resumido
* legível

```css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bd.gif) no-repeat left top;
}

```

## Detalhes

* não irá considerar propriedades anteriores;
* valores não especificados irão assumir o valor padrão;
* geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encotrar problemas.

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**

# Vendor Prefixes

Permite que browsers adicione `features`a fim de colocar em uso alguma novidade que vemos no CSS

# Exemplo

```css
p{
    -webkit-background-clip: text;  /* Chrome, Safari, iOS e Android */
    -moz-background-clip: text;  /* Mozilla (Firefox) */
    -ms-background-clip: text;  /* Internet Explorer */
    -o-background-clip: text;   /* Opera */
}
```

# Consultas

.[http://ireade.github.io/wich-vendor-prefix/].
.[http://caniuse.com].