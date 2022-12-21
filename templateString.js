
// Foi uma adição no Ecman 2015.
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

// Em uma string convensional não é possível quebrar uma string no meio.
// Com erros ao se executar o código, já com template string é possível fazer isso.
const template = `
                    Olá,
                    ${nome}!`
console.log(template)

// Realizando cálculos matemáticos
console.log(`1 + 1 = ${1 + 1}`)

// Função Erow
// Funciona como se estivesse atribuindo uma função para variável: up.
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)