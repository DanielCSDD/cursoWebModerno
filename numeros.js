
// Declarando uma constante de valor númerico com ponto flutuante
const peso1 = 1.0
const peso2 = Number('2.0')

// Imprimindo os valores de peso1 e peso2
console.log(`peso1 = ${peso1}, peso2 = ${peso2}.`)

// Verificando o tipo da variável
// Os valores como: 1.0, 2.0... são entendidos como inteiros.
// Caso mude os valores para: 1.1, 2.2... serão entendidos como ponto flutuante.
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Realizando operações aritiméticas
// Declarando as variáveis.
const avaliacao1 = 9.871
const avaliacao2 = 6.871

// Montando o cálculo
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Imprimindo o valor da média obtida
console.log(media)

// Formatando o valor da variável média para apresentar nenos casas decimais.
// Definindo a apresentação de somente duas casas decimais.
console.log(media.toFixed(2))

// Convertendo valor numérico em string
console.log(media.toString())

// Convertendo o formato da string para binário.
console.log(media.toString(2))

// Verificando o tipo da variável média.
console.log(typeof media)