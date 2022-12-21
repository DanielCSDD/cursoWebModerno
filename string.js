
// Iremos abordar algumas situações de utilização de strings.
// Menos relativo a template string.
const escola = 'Cod3r'

// Capturando o quarto caractere de uma string.
console.log(escola.charAt(4))

// Recuperando o valor do caractere na tabela unicode.
console.log(escola.charCodeAt(3))

// Recuperando a posição de um caractere que esteja em um texto.
console.log(escola.indexOf('r'))

// Recuperando texto após informar um indice.
// Após o valor do indice todo o texto será apresentado.
console.log(escola.substring(1))

// Recuperando texto após informar dois valores como indice de pesquisa.
// Será apresentado o texto que estiver entre o indice inicial e final.
// Porém o caractere no indice final não será impresso.
console.log(escola.substring(0, 3))

// Concatenando uma cadeia de caractere.
console.log('Escola'.concat(escola).concat('!'))

// Editando uma determinada string em um texto.
console.log(escola.replace('3', 'e'))

// Convertendo o conteúdo de uma string em array
console.log('Ana, João, Marcos'.split(','))