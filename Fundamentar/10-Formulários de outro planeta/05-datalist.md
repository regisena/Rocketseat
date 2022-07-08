# \<datalist>

- Lista de valores como sugestão a uma tag <input>.
- Valores sugestivos e não obrigatórios
- Usuário poderá selecionar um dos valores, ou colocar um valor diferente da sugestão.

```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>

```

# list

- Recebe como valor o id de um <datalist> residente no mesmo documento.

# Tipos de input suportados

- text, search, url, tel, email, date, month, week, time, datetime-local, number, range e color.

# Tipos de input não suportados (conforme especificação)

- hidden, password, checkbox, radio, file, ou quelauer tipo de button

```html
<input type="text" list="fruitsdata" placeholder="Eswcolha uma fruta"/>

<datalist id="fruitsdata">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
    <option>cherry</option>
</datalist>
```
[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

* Verificar a compatilidade com o browser https://caniuse.com