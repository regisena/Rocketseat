# Desafios HTML

# 💻 Sobre o desafio

---

Essa é uma série de desafios básicos para que você possa praticar seus conhecimentos em HTML. Recomendamos que você assista ao curso [O Guia Estelar de HTML](https://app.rocketseat.com.br/node/o-guia-estelar-de-html), caso ainda não tenha assistido. 

[1. Glossário](https://www.notion.so/1-Gloss-rio-03e398f3c3e642b0a17c344aa354601f)

[2. Formulário de contato](https://www.notion.so/2-Formul-rio-de-contato-7bb047fc602f48a1859e02882ddd547b)

[3. Lista de compras](https://www.notion.so/3-Lista-de-compras-91ff11e5af754cb48b51ff56e272a89d)

[4. Quiz](https://www.notion.so/4-Quiz-46ee27c74c00436db6368b3855ee7dbc)

[5. Blog Post](https://www.notion.so/5-Blog-Post-46d74c84a63c4e628739cc8a4fa7898f)

# 📅 Entrega

---

Esses desafios **não precisam ser entregues** e não receberão correção. Após concluí-los, adicionar esses códigos ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

Feito com 💜 por Rocketseat 👋 Participe da nossa [comunidade aberta](https://discord.gg/bacwY2gDCF)!

# 1. Glossário

# 💻 Sobre o desafio

---

Nesse desafio você deve criar um glossário com com no mínimo 4 tags HTML e suas definições.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **glossary.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Glossário</title>
  </head>
  <body>

  </body>
</html>
```

<aside>
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Glossário</title>`

</aside>

### Criando uma lista de descrição

- Adicione um título para a página
    
    <aside>
    ❓
    
    [](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/titulos-e-paragrafos)
    
    </aside>
    
- Para criar o glossário, você deve usar uma lista de descrição (`<dl>`)
    
    <aside>
    ❓ Veja mais sobre lista de descrição
    
    [](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/lista-de-descricao)
    
    </aside>
    
- O termo da descrição deve estar em **negrito**
    - Bônus: o termo da descrição pode ser um link que leva para a documentação sobre o elemento HTML

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

# 2. Formulário de contato

# 💻 Sobre o desafio

---

Nesse desafio você vai criar um formulário para contato.

Para esse desafio, recomendamos que você assista ao curso [Formulários de Outro Planeta](https://app.rocketseat.com.br/node/formularios-de-outro-planeta), caso ainda não tenha assistido. 

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **contato.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contato</title>
  </head>
  <body>

  </body>
</html>
```

<aside>
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Contato</title>`

</aside>

### Criando o formulário

- Dentro do formulário adicione um `fieldset` com `legend` "Entre em contato"
- Adicione um `select` para que o usuário possa escolher o assunto do contato (ex: suporte, sugestão e reclamação)
- Adicione campos para que o usuário possa escrever seu **nome completo** e **e-mail**
    - Lembre-se de usar o `type` correto para cada tipo de input
- Adicione uma área de texto para que o usuário possa enviar uma **mensagem**
- Adicione um campo com um `checkbox` e o texto "Aceito receber novidades por e-mail"
- O formulário deve ter um botão "Enviar"

<aside>
💡 Para adicionar quebra de linha, você pode usar a tag `<br>` 
[https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/br](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/br)

</aside>

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

# 3. Lista de compras

# 💻 Sobre o desafio

---

Nesse exercício você deve criar uma lista de compras que tenha no mínimo 4 itens. 

Pode ser uma lista de compras de mercado, uma lista de itens que você deseja comprar, ou qualquer outro tipo de lista de compras.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **shopping-list.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Compras</title>
  </head>
  <body>

  </body>
</html>
```

<aside>
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Lista de Compras</title>`

</aside>

### Criando a lista

- A página deve ter um Título `h1` e um separador (`hr`) logo abaixo
- Cada item da lista deve ser um input do tipo `checkbox`
- O primeiro item deve estar marcado como `checked`

<aside>
❓ Veja essa aula sobre checkbox

[](https://app.rocketseat.com.br/node/formularios-de-outro-planeta/group/tags-de-entrada-de-dados/lesson/checkbox)

</aside>

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

# 4. Quiz

# 💻 Sobre o desafio

---

Nesse desafio você deve criar um quiz de perguntas e respostas. 

Adicione no mínimo 3 perguntas com 4 opções de respostas cada. 

Você pode escolher qual o tema do quiz.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **quiz.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz</title>
  </head>
  <body>

  </body>
</html>
```

<aside>
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Quiz</title>`

</aside>

### Criando o Quiz

Quiz é um jogo de perguntas e respostas. Uma forma simples de criar um quiz, é adicionando um formulário, e usar a lista ordenada para criar as perguntas e inputs do tipo radio para as opções de respostas.

- Primeiro você pode adicionar um formulário na página

```html
<form action="">
   <!-- Aqui você vai adicionar as perguntas e opções de respostas -->
</form>
```

<aside>
💡 Não precisa se preocupar com os atributos do form pois, nesse momento, vamos focar apenas na estrutura HTML do quiz e o mesmo não precisa ser enviado.

</aside>

### Listando as perguntas e respostas

Podemos criar uma lista ordenada (`ol`) para fazer a lista de perguntas e respostas. A estrutura ficaria algo parecido com a estrutura abaixo:

```html
<ol>
  <li>
    <h3>Pergunta 1</h3>
    <div>
      <input type="radio" name="question-1" id="question-1-a" value="A" />
      <label for="question-1-a">A) opção 1</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-b" value="B" />
      <label for="question-1-b">B) opção 2</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-c" value="C" />
      <label for="question-1-c">C) opção 3</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-d" value="D" />
      <label for="question-1-d">D) opção 4</label>
    </div>
  </li>
<!-- Adicionar as outras perguntas dentro de um li -->
</ol>
```

<aside>
❓ Aula sobre listas

[](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/listas)

</aside>

<aside>
❓ Input type="radio"

[](https://app.rocketseat.com.br/node/formularios-de-outro-planeta/group/tags-de-entrada-de-dados/lesson/radio)

</aside>

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

# 5. Blog Post

# 💻 Sobre o desafio

---

Nesse desafio você deve criar a estrutura **HTML** para a página de post de um blog.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML, você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **blog-post.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>

  </body>
</html>
```

<aside>
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Blog Post</title>`

</aside>

## Informações da página

Nessa seção você vai encontrar as instruções e dicas para resolver o desafio.

Então, bora codar! 👨‍💻👩‍💻

- Adicione um `header` com o nome do blog em negrito e adicione links para páginas "Home", "Sobre" e "Contato".
    
    <aside>
    💡  Os links não precisam levar para nenhuma página, para isso basta adicionar um `#` no `href` da tag `a`
    
    [](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/links/lesson/conhecendo-a-tag-ancora)
    
    </aside>
    
- O post do blog deve ficar dentro da tag `article`
    
    <aside>
    ❓ Nesse curso, você pode ver mais sobre como deixar o HTML semântico
    
    [](https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos)
    
    E aqui neste outro pode ver mais sobre a tag **article**
    
    [](https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos/lesson/article)
    
    </aside>
    

## A estrutura do post

- Adicione um **título** para o post
    
    <aside>
    ❓
    
    [](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/titulos-e-paragrafos)
    
    </aside>
    

### O post deve ter:

- Uma imagem
    
    <aside>
    💡 Para que a imagem não fique muito grande, você pode usar o atributo `width` adicionando uma largura de 400px, por exemplo `width="400px"`
    
    [](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/conceitos-7/lesson/atributos)
    
    </aside>
    
    <aside>
    ❓ Imagens no HTML
    
    [](https://app.rocketseat.com.br/node/posso-ver-e-ouvir-o-html/group/images/lesson/images)
    
    </aside>
    
    <aside>
    💡 Sites onde você pode encontrar imagens grátis para usar nos seus projetos: [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/pt-br/), [Pixabay](https://pixabay.com/pt/).
    
    </aside>
    
- Adicione uma citação
    
    <aside>
    ❓
    
    [](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/citacoes)
    
    </aside>
    
- Crie mínimo 3 parágrafos (você pode usar o `lorem` para criar o texto dos parágrafos)
- Adicione também um separador `<hr>`
- Adicione um `aside` com as informações sobre o autor do post
    - data da postagem
    - adicione uma imagem do autor
    - nome do autor
    - um pequeno texto sobre o autor
    
    <aside>
    ❓
    
    [](https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos/lesson/aside)
    
    </aside>
    

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.