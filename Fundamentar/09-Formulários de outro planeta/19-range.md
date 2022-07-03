# \<input type="range">

- Controle para selecionar um valor numérico
- Slider ou dial control

# Atributos

- min/max
- step

```html

<p>Audio settings:</p>

<div>
  <input type="range" id="volume" name="volume"
         min="0" max="11">
  <label for="volume">Volume</label>
</div>

<div>
  <input type="range" id="cowbell" name="cowbell" 
         min="0" max="100" value="90" step="10">
  <label for="cowbell">Cowbell</label>
</div>

```

[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)