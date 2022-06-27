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


[Google](http://google.com/)