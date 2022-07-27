/**
 * Buscando e contando dados em Arrays = 
 * 
 * Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
 * 
 *  . Contar o número de categorias e o número de livros em cada categoria
 *  . Contar o número de autores
 *  . Mostrar livros do autor Augusto Cury
 *  . Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
 * 
 */

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harc Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "Geroge S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Letchter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como engrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
];

const totalCategories = booksByCategory.length;

// Contar o número de categorias e o número de livros em cada categoria
for (const category of booksByCategory) {
    console.log("Total de livros da categoria: ", category.category);
    console.log(category.books.length);
}

// Contar o número de autores
function countAuthors() {
    let authors = [];

    for(const category of booksByCategory){
        for(const book of category.books){
            if(authors.indexOf(book.author) == -1){ // irá -1 pq não há conteúdo no array
                authors.push(book.author);
            }
            //console.log("Total de autores: ", category.books.author.length);
        }
    }
    console.log("Total de autores: ", authors.length);
}

countAuthors();

// Mostrar livros do autor Augusto Cury

function booksOfAugustoCury() {
    let books = [];

    for(const category of booksByCategory){
        for(const book of category.books){
            if(book.author === "Augusto Cury"){ 
                books.push(book.title);
            }
        }
    }
    console.log("Livros do autor: ", books);
}

booksOfAugustoCury();

// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

function booksOfAuthor(author) {
    let books = [];

    for(const category of booksByCategory){
        for(const book of category.books){
            if(book.author === author){ 
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}

booksOfAuthor("Augusto Cury");
