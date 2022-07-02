# \<textarea>

- mais de uma linha
- útil para textos grandes

## Atributos
- id
- name
- rows e cols
- maxlength e minlength
- wrap (wrap="off" ficará com a barra de rolagem horizontal)
- ... outros comuns aos \<input>s
    - autocomplete, autofocus, disabled, placeholder, readonly, form, required


```html

<label for="story">Tell us your story:</label>

<textarea id="story" name="story"
          rows="5" cols="33">
It was a dark and stormy night...
</textarea>

```