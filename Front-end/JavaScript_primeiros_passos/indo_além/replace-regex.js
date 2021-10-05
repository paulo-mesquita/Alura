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
const frase2 = 'Frase que come�a com um palavra-feia e tem outra palavra-feia no final'

const frase2Atualizada = frase2.replace(/palavra-feia/g, '********') 
console.log(frase2Atualizada)  // "Frase que come�a com um ******** e tem outra ******** no final"

//---------------------------------//
// Resgatando group matches com a fun��o replace
// \d = digito
// "?" para alguma parte da regex ser opcional
// marcadores de come�o "^" e fim "$"
//---------------------------------//
const cpf = '12345679810'

const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

console.log(cpfFormatado) // O retorno seria 123.456.789-10

//---------------------------------//
//Caso voc� queira fazer algo mais complexo
//---------------------------------//
const cpf2 = '12345679810'

const cpf2Formatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
  console.log(arguments) // � uma forma de visualizar todos os par�metros que essa fun��o est� recebendo, o numero de grupos pode variar e assim fica f�cil de debugar.
  return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
})

console.log(cpf2Formatado) // O retorno seria 123.456.789-10
//---------------------------------//
