# \<input type="radio">

- Projetado para selecionar uma única opção de um grupo de opções

## ATRIBUTOS ESSENCIAIS

- checked
    * indica que o campo foi marcado
- value
    * valor que aquele campo contém

```html

<fieldset>
    <legend>Select a maintenance drone:</legend>

    <div>
      <input type="radio" id="huey" name="drone" value="huey"
             checked>
      <label for="huey">Huey</label>
    </div>

    <div>
      <input type="radio" id="dewey" name="drone" value="dewey">
      <label for="dewey">Dewey</label>
    </div>

    <div>
      <input type="radio" id="louie" name="drone" value="louie">
      <label for="louie">Louie</label>
    </div>
</fieldset>

```

[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)