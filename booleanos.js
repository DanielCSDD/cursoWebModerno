let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Além dos valores: true e false. Podemos usar valores alternativos, como os valores numéricos.
// Para isso utilizaremos o sinal de negação duas vezes para obtermos uma saída booleana.
isAtivo = 1
console.log(!!isAtivo)

// Outras situações onde o valor será: verdadeiro.
// Todos os números inteiros são verdadeiro com exceção do 0.
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
// Declarando array
console.log(!![])
// Declarando objeto
console.log(!!{})
// Tipo Infinity também é verdadeiro
console.log(!!Infinity)
// Em situação de atribuíção
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))

// Outras situações onde o valor será: falso.
console.log(!!0)
// String vazia
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Utilizando operadores lógicos
// Se ao menos um for verdadeiro o valor da expressão será verdadeiro.
console.log(!!(' ' || null || 0 || ' '))