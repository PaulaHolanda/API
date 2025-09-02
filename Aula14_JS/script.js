// Atividade 01
// Crie um objeto chamado pessoa que contenha as seguintes propriedades:

// nome: Um nome à sua escolha.
// idade: Um número que represente a idade.
// cidade: O nome de uma cidade.

// Converta o objeto pessoa em uma string JSON usando JSON.stringify().
// Exiba o resultado no console.

// Objetivo:
// Praticar a conversão de um objeto JavaScript em uma string JSON.

const pessoa = {
    nome: "Paula",
    idade: 50,
    cidade: "Recife"
}
console.log(JSON.stringify (pessoa))

// Atividade 02
// Crie um array chamado produtos, onde cada item seja um objeto com as
// seguintes propriedades:

// nome: O nome do produto.
// preco: O preço do produto.

// Converta o array produtos em uma string JSON usando JSON.stringify().
// Exiba o resultado no console.

// Objetivo:
// Praticar a conversão de um array de objetos JavaScript em uma string JSON.

const produtos = [{
    nome: "batata",
    preço: "10"

}]
console.log(JSON.stringify (produtos))

// Atividade 03
// Usando JavaScript e Fetch API, crie uma função chamada buscarUsuarios.

// A função deve fazer uma requisição GET para a seguinte URL da API pública:
// https://jsonplaceholder.typicode.com/users.

// Converta a resposta para JSON e exiba no console os nomes dos usuários retornados.

// Objetivo:
// Fazer uma requisição GET para uma API pública e exibir os dados.

let buscarUsuarios = 
