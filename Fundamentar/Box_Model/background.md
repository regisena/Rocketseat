## Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
    - a posição das imagens,
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente

```css
header{
    height: 100px;
    border: 7px dashed red;

    background-color: rgb(55, 100, 50);
    background-image: url(url da imagem);
    background-repeat: no-repeat;
    background-position: left bottom ou center (somente);
    background-size: contain;
    background-attachment: fixed; /*a imagem de fundo fica fixa*/
    background: linear-gradient(red, yellow);
}

Refência: developer.mozilla.org
