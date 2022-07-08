# \<input type="color" />

- Interface para selecionar cor
- Color picker

# Atributos
- value: RGB
    - Se inválido, o preto será exibido
- list
    * o id de uma tag \<datalist> que está no mesmo documento
    * \<datalist> irá conter uma lista de valores pré definidos a fim
        * Os valores do \<datalist> que não forem compatíveis com o 

```html
<p>Choose your monster's colors:</p>

<div>
    <input type="color" id="head" name="head"
           value="#e66465">
    <label for="head">Head</label>
</div>

<div>
    <input type="color" id="body" name="body"
            value="#f6b73c">
    <label for="body">Body</label>
</div>
```
[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)