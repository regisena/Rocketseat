# \<input type="file" />

- Usuário poderá escolher 1 ou mais arquivos para enviar no formulário

# Atributos

- value
    - contém o arquivo a ser enviado
- accept
    - descreve que tipos de arquivos serão aceitos
    - exemplo: .doc, .docx, .pdf, audio/*, image/png, .png
- files
    - a lista de arquivo ou arquivos
- multiple
    - permite o envio de múltiplos arquivos (boolean)

# Envio dos arquivos
Para envio dos arquivos o formulário deverá utilizar o método POST e o atributo enctype como "multipart/form-data"

```html
<label for="avatar">Choose a profile picture:</label>

<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">
```

[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)