
// Trabalhando com a biblioteca momentjs
var moment = require('moment'); // require

// Informa a localiza��o/idioma usado
moment.locale('pt-br');

// Exibir dia atual
const diaAtual = moment().format('dddd');
console.log(diaAtual);

//Exibir data completa neste modelo: Dia/M�s/Ano
const dataAtual = moment().format('L');
console.log(dataAtual);

//Calcular datas:
const calcData = moment("05031980", "DDMMYYYY").fromNow();
console.log(calcData);