# \<optgroup>

- Em um Formulário Web, o elemento HTML \<optgroup> cria um agrupamento de opções dentro do elemento \<select>.

## Atributos

- disabled
  * Se este atributo booleano for definido, nenhum dos itens neste optgroup poderá ser selecionado. Muitos navegadores marcam como cinza e não permitem que o elemento receba nenhum evento de navegação, como cliques do mouse ou foco.
- label
  * É o nome do optgroup, é o que os navegadores irão exibir como rótulo. Este atributo é obrigatório se o elemento for usado.

```html

<select>
  <optgroup label="Grupo 1">
    <option>Opção 1.1</option>
  </optgroup>
  <optgroup label="Grupo 2">
    <option>Opção 2.1</option>
    <option>Opção 2.2</option>
  </optgroup>
  <optgroup label="Grupo 3" disabled>
    <option>Opção 3.1</option>
    <option>Opção 3.2</option>
    <option>Opção 3.3</option>
  </optgroup>
</select>

```

[Referência:](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/optgroup)