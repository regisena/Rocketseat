# dataList

- Lista de valores como sugestão a uma tag <input>.
- Valores sugestivos e não obrigatórios
- Usuário poderá selecionar um dos valores, ou colocar um valor diferente da sugestão.

```html
<datalist id="fruitsdata">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
    <option>cherry</option>
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

* Verificar a compatilidade com o browser https://caniuse.com