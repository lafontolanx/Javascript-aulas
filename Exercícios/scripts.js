/* Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes
desafios

    * Contar o número de categorias e o número de livros
em cada categoria.
    * Contar o número de autores.
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá 
receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Bibilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kioyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategory = booksByCategory.length
let totalAuthors = []

for(let category of booksByCategory){
    console.log('Total de livros da categoria', category.category,': ' + category.books.length)

    for(let authors of category.books){
        
        if(totalAuthors.indexOf(authors.author) == -1){
            totalAuthors.push(authors.author)
        }
    }
}
console.log('Total de Autores: ' + totalAuthors.length)


let booksByAuthor = []

function booksOfAuthor(nomeAuthor){

    for(let category of booksByCategory){

        for(let authors of category.books){
            
            if((authors.author) == nomeAuthor){
                booksByAuthor.push(authors.title)
            }
        }
    }
    console.log(`Livros do Autor ${nomeAuthor}:\n * ${booksByAuthor.join("\n * ")}`)
}

booksOfAuthor('Augusto Cury')







