# \<input type="url" />

- Espera que o usuário digite uma url válida como, http://algumacoisa.com
- Irá validar se o valor digitado é uma url

# Atributos

- placeholder
- readonly / disabled
- value

- required

- minlegth / maxlength
    * O mínimo e/ou máximo valor que o campo irá conter

- size
    * Valor numérico indicando quantos caracteres esse campo deveria conter, modificando o tamanho do campo para o usuário

- pattern
    * Uso da expressão regular para validar o campo
    * exemplo: o usuário só poderá colocar domínio .com.br
        * pattern=".*\.com\.br/.*"

- list
    * o id de uma tag \<datalist> que está no mesmo documento
    * \<datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
        * Os valores do \<datalist> que não forem compatíveis com o campo, não serão apresentados como sugestão
```html
<datalist id="urlsdata">
    <option>http://meusite.com.br</option>
    <option>https://meusite.com.br</option>
</datalist>
<form action="">
    <input  type="url"
            list="urlsdata">
    <button type="submit">Enviar</button>
</form>
```

- spellcheck
    * Habilitar a verificação ortográfica para este input (true ou false)

```html
<form action="">
    <input  type="url"
            placeholder="http://example.com.br"
            pattern=".*\.com\.br/.*"
            title="Somente domínios .com.br serão aceitos"
            required>
    <button type="submit">Enviar</button>
</form>
```

[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)