# Trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

-----------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

-----------------------------------------

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* inclui *fallback* font

```css
p{
    font-family: "Times New Roman", Times, serif;
}
```

- serif
- sans

-----------------------------------------

## Font Weight

* Peso da fonte

```css
p{
    font-weight: bold;
}
```

-----------------------------------------

## Font Style

* O estilo da fonte

```css
span{
    font-style: italic;
}
```
-----------------------------------------

## Font Size

* O tamanho da fonte
```css
p{
    font-size: 18px;
}
```

-----------------------------------------

## Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web?

* @font-face
* @import
* link

-----------------------------------------

## font-variant

* variações na apresentação da fonte

```css
p{
    font-variante: small-caps;
}
```

-----------------------------------------

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagem de 50% a 200%

```css
p{
    font-stretch: expanded;
}
```

-----------------------------------------

## letter-spacing

* Espaços entre caracteres

```css
p{
    letter-spacing: 4px;
}
```

-----------------------------------------

## word-spacing

* Espaços entre caracteres

```css
p{
    word-spacing: 4px;
}
```

-----------------------------------------

## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p{
    line-height: 1.6;
}
```

### Referências: 

- https://www.w3.org/TR/css-fonts-3
- https://css-tricks.com/snippets/css/using-font-face/
- fonts.google.com

# Atribuindo mais estilos às fontes

- http://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
- http://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
- http://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
- http://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
- http://developer.mozilla.org/en-US/docs/Web/CSSline-height