
# \<label>

- associar e identificar uma (ou mais) tag de entrada de dados
- acessibilidade
- você poderá clicar para mudar o foco da entrada de dados

Atributos
- for
    - para fazer a conexão entre este labe e a tag de entrada de dadis
    - é feita via id do input
    - só funciona com elementos específicos
        - button, input (not hidden), meter, output, progress, select, textarea


```html
<!-- por associação -->
<label for="">
    Nome Completo:
    <input type="text">
</label>
<!-- por conexão entre os elementos pelo id e for -->
<label for="nome">Nome Completo:</label>
<input id="nome" type="text">