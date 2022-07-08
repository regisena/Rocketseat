<!--
<fieldset>
- agrupamento de campos
- mesmo propósito
- semântico
- acessibilidade

Atributos especiais
- disabled
    - desabilita todos os elemtnso internos
    - não serão enviados ao submeter o formulário
- form
    - o id de um formulário ao qual esse fieldset pertence
    - não precisa estar dentro do formulário
- name
    - nome do grupo

<legend>
- nome do agrupamento
- primeiro elemento dentro do fieldset
-->

```html
<!-- Básico -->
<form>
    <fieldset>
        <legend>Contato</legend>
    </fieldset>
</form>
<!--=================================-->
<form action="">
    <fieldset>
        <legend>Contato</legend>

        <label for="">Nome</label>
        <input type="text">
    </fieldset>
</form>
<!--=================================-->
<form action="">
    <fieldset disabled>
        <legend>Contato</legend>

        <label for="">Nome</label>
        <input type="text">
    </fieldset>
</form>
<!--=================================-->
<form id="contato" action="">
    <button>Enviar</button>
</form>

<fieldset form="contato" name="inputs-contact">
    <legend>Contato</legend>

    <label for="">Nome</label>
    <input type="text">
</fieldset>
<!--=================================-->
```

[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)