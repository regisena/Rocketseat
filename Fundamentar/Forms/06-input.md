# input

- Um dos mais usados em formulários
- Aceita os mais diversos tipos de dados
- Um dos mais poderesos e complexos
- Elevado número de combinações

Atributos
- type
- name
- id

```html
<input type="text">
<input type="date">
<input type="number">
<input type="email">
<input type="file">
<input type="password">
```
## input Atributos comuns

- autocomplete
- autofocus "é booleano", um por página
- disabled "é booleano"
- readonly "é booleano" (maioria)
- value
- form (maioria)
- name
- required "é booleano" (maioria)
- placeholder

```html
<input  type="text"
        autocomplete="email"
        autofocus
        disabled>

<form id="meu-form"></form>
<input  name="email" type="email"
        form="meu-form">

```

## Type password

- Colocar uma senha de maneira segura
- Esconde o que está sendo digitado no campo
- O estilo da apresentação do campo, depende do User Agent

# Atributos

- minlength / maxleght
    * O número mínimo e/ou máximo de caracteres para este campo
- size
    * O número aceitável de caracteres que esse campo deverá conter
-pattern
    * Expressão regular para validar o que está sendo digitado no campo
    * Altamente recomendado o uso de um padrão de segurança alta de senha
    * exemplos: queremos que a senha contenha caracteres hexadecimais com o limite de no mínimo 4 e no máximo 8 caracteres
        *pattern="[0-9a-fA-F]{4,8}"
-placeholder
    * Mostra um exemplo de texto a ser digitado no campo

-reaonly / disabled
    *Atributo booleano indicando se o campo está habilitado ou não

- required
    * o campo será obrigatório

- inputmode
    * poderá alterar o uso do teclado em smartphones
    * exemplo: queremos que o cliente só adicione números
        * inputmode="numeric"

- autocomplete
    * on: permite a sugesetão de: new-password ou current-password
    * off: desabilita a opção de autocompletar
    * new-password: o navegador poderá sugerir uma nova senha


[Google](http://google.com/)