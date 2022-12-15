// Declarando a variével: a.
// Para isso utilizamos o identificador: var.
// logo em seguida o nome da variável: a.
// Em seguida utilizamos o sinal de atribuíção: =.
// E, finalizando com o valor a ser passdo a variável: 3.
var a = 3

// Na declaração de variáveis também podemos realiza-la utilizando
// o identificador: let além do var.
// Atualmente é recomendado a utilização do let ao invés do var.
let b = 4

// Por exemplo, vamos redeclarar as duas variáveis: a e b.
var a = 30 // O código irá funcionar normalmente.
let b = 4 // Causará erro ao ser executado, pois não é possiver redeclarar variáveis com identificador: let.

// Outro exemplo, vamos somente atribuir novos valores as variáveis: a e b.
a = 30 // O código irá funcionar normalmente.
b = 4 // O código irá funcionar normalmente, por que, não estrou redeclarando, mas, sim, estou atribuindo valores a ela.

// Declarnado constante.
// Constante é um tipo de variável, que seu conteúdo só é atribuido uma única vez, geralmente na iicialização da aplicação.
// Fora esse momento nã é possível alterar seu valor novamente.
const c = 5