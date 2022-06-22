<!--
Criando título visíveis para as imagens

<figure> e <figcaption>
-->

-- não semântico
<div class="figure">
    <a href="https://google.com">
        <img
            src="https://source.unsplash.com/random"
            alt="Imagem de title"
            title="Colocar um título na imagem"
            height="250px"
        >
    </a>
</div>

-- semântico
<a href="https://google.com">
    <figure>
            <img
                src="https://source.unsplash.com/random"
                alt="Imagem de title"
                title="Colocar um título na imagem"
                height="250px"
            >
        <figcaption>Colocar um título na imagem</figcaption>
    </figure>
</a>

Refência: developer.mozilla.org
