# \<input type="checkbox">

- Caixas que podem ser marcadas
- Selecionar um valor para ser enviado
- Se não selecionado, não será enviado nenhum dado

## Atributos
- globais
- value
    * valor que aquele campo contém
    * se não estiver presente, o padrão é 'on'
- checked
    * para deixar o campo marcado por padrão (boolean)

## Marcar múltiplos valores
- Usaremos o atributo 'name' com o mesmo nome para os diversos campos

```html
<fieldset>
    <legend>Choose your interests:</legend>

    <div>
      <input    type="checkbox" 
                id="scales"        
                name="scales"
                checked>
      <label for="scales">Scales</label>
    </div>

    <div>
      <input    type="checkbox" 
                id="horns" 
                name="horns">
      <label for="horns">Horns</label>
    </div>
</fieldset>
=====================================================
<fieldset>
    <legend>Choose your monster's features:</legend>

    <div>
      <input type="checkbox" id="scales" name="scales"
             checked>
      <label for="scales">Scales</label>
    </div>

    <div>
      <input type="checkbox" id="horns" name="horns">
      <label for="horns">Horns</label>
    </div>
</fieldset>
```

[Referência: ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)