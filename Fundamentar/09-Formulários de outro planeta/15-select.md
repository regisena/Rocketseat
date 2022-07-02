# \<select>

- Controle que fornece um amenu de opções

# \<option>

- Contém as opções a serem selecionadas
- Atributos necessários
    - value

ATRIBUTOS ÚNICOS
- multiple
    - Habilita múltiplas opções
- size
    - Quando opções visíveis?

```html

<!-- O segundo valor estará selecionado inicialmente -->
<select name="select">
  <option value="valor1">Valor 1</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
</select>

====

<label for="carselect">Qual o modelo do carro</label>
<br>
<select name="carmodel" id="carselect">
    <option value="fiat">Uno</option>
    <option value="audi">A3</option>
    <option value="bmw">X6</option>
</select>

```

[Referência:](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select)