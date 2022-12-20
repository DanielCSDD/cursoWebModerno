
// Cuidados na divisão por números muito baixos.
// Javascript possui um tipo chamado infinity.
console.log(7/0.000000001)

// Outra operação não convencional, mas que funciona em avascript é:
// Javascript pega o conteúdo presente na string e valida se é possível 
// realizar a operação matemática.
console.log("10"/2)

// Um exemplo que não dará certo é a seguinte:
// O compilador não entenderá o sinal de ','.
console.log("10,2"/2)

// OUtro caso que devemos tomr cuidado... apesar de ser
// não convencional. Porém em algumas linguagens de programação 
// da certo.
console.log('Show!' * 2)

// Cálculos com ponto flutuante que poderão obter valores impressisos.
// Para tanto, há uma especificação que trabalha essa questão.
// Ecman internacionl especificação org.
console.log(0.1 + 0.7)

// Não é possível utilizar o toString() em valores númericos literais.
// console.log(10.toString())
console.log((10).toString())