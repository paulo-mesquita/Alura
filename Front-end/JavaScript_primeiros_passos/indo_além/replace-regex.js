//---------------------------------//
//Replace:
//---------------------------------//
const frase1 = 'Frase com uma palavra-feia'

frase1.replace('palavra-feia', '********') 

console.log(frase1) // O retorno seria 'Frase com uma ********')

//---------------------------------//
//Regex:
//O 'g' no final da regex indica que queremos buscar de forma global no texto base.
//---------------------------------//
const frase2 = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final'

const frase2Atualizada = frase2.replace(/palavra-feia/g, '********') 
console.log(frase2Atualizada)  // "Frase que começa com um ******** e tem outra ******** no final"

//---------------------------------//
// Resgatando group matches com a função replace
// \d = digito
// "?" para alguma parte da regex ser opcional
// marcadores de começo "^" e fim "$"
//---------------------------------//
const cpf = '12345679810'

const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

console.log(cpfFormatado) // O retorno seria 123.456.789-10

//---------------------------------//
//Caso você queira fazer algo mais complexo
//---------------------------------//
const cpf2 = '12345679810'

const cpf2Formatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
  console.log(arguments) // é uma forma de visualizar todos os parâmetros que essa função está recebendo, o numero de grupos pode variar e assim fica fácil de debugar.
  return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
})

console.log(cpf2Formatado) // O retorno seria 123.456.789-10
//---------------------------------//
