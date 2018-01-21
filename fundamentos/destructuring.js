// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } =  pessoa
console.log(nome, idade)

/*
 * Variaveis utilizando nomes
 * diferentes das chaves 
 * do objeto pessoa
*/
const {nome: n, idade: i} =  pessoa
console.log(n, i)

// Atribuindo valor padrao
const {sobrenome, bemHumorada =  true} = pessoa
console.log(sobrenome, bemHumorada)

// Acessando um objeto dentro de outro objeto
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { endereco: { logradouro: l, numero: na, cep: c = 1 } } = pessoa
console.log(l, na, c)
