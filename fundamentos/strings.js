const escola = "Cod3r"

/*
 * charAt retorna o caractere
 * que tem como indice o numero
 *  passado como argumento.
 */
console.log(escola.charAt(4))

// nao dá erro se o indice nao existe
console.log(escola.charAt(5))

/*
 * charCodeAt retorna o codigo Unicode
 * do caractere que teve seu indice
 * passado com argumento na função
 */
console.log(escola.charCodeAt(3))

/*
 * indexOf retorna o index do caractere
 * passado como argumento no método
 */
console.log(escola.indexOf('3'))

/* 
 * substring retorna uma substring
 * com os pares de indices passados
 * como argumento no metodo
 */ 
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

/*
 * concat serve para concatenar
 * pode se usar o operador +
 * no lugar do metodo concat
 */
console.log('Escola '.concat(escola).concat("!"))

/*
 * replace substitui caractereres na string
 */
console.log(escola.replace('d', 'e'))
// aceita regex como argumento
console.log(escola.replace(/\d/, 'e'))

/*
 * split gera um array,
 * mesmo modo de uso do python
 * aceita regex
 */
console.log('Ana,Maria,Pedro'.split(','))