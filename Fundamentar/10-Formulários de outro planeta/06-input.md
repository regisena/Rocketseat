# \<input type="text">

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

    ## Type email

    - Espera que o usuário digite um email
    - Irá validar se o valor digitado é um e-mail

    # Atributos

    - placeholder
    - readonly / disabled
    - value

    - required

    - multiple (boolean)
        * o campo irá receber 1 ou mais emails, separado por vírgulas

    - minlegth / maxlength
        * o mínimo e/ou máximo valor que o campo irá conter
    - size
        * Valor numérico indicando quantos caracteres esse
    
    - pattern
        * Uso de expressão regular para validar o campo
        * exemplo: o usuário só poderá colocar e-mail do domínio recketseat.com.br
            * pattern=".+@rocketseat\.com\.br"
    - list
        * o id de uma tag \<datalist> que está no mesmo documento
        * \<datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
            * Os valores do \<datalist> que não forem compatíveis com o campo, não serão apresentados como sugestão


[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)