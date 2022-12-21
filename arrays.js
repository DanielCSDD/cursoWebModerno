
// Podemos criar arrays de elementos literais de forma que os separamos por ','.
const valores = [7.7, 8.9, 6.3, 9.2]

// Acessando valores presente no arrays.
console.log(valores[0], valores[3])

// Acessando valor inválido
console.log(valores[4])

// Adicionando novos valores ao array.
valores[4] = 10
console.log(valores[4])

valores[10] = 100
console.log(valores)

// Verificando a quantidade de elementos na array
console.log(valores.length)

// Adicionando novos valores ao array utilizando o método push.
valores.push({id: 3}, false, null, 'teste')

// Visualizando os conteúdos da array.
console.log(valores) 

// Removendo o último valor da array.
console.log(valores.pop())

delete valores[0]
console.log(valores)

// Verificando o tipo da array
console.log(typeof valores)