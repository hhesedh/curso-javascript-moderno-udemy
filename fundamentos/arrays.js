const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

// Adicionado valores em um array
// Atraves do indice
valores[4] = 10
console.log(valores[4])

// Exemplo interessante
// valores[10] = 10
// console.log(valores)

// Verificando tamanho do array
console.log(valores.length)

// metodo push adiciona valores no final do array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// pop retorna o ultimo item do array
// e retira ele do array
console.log(valores.pop())

// O comando delete deleta valores do array
// através do indice
delete valores[0]
console.log(valores)

console.log(typeof valores)