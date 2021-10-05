
// Trabalhando com a biblioteca momentjs
var moment = require('moment'); // require

// Informa a localização/idioma usado
moment.locale('pt-br');

// Exibir dia atual
const diaAtual = moment().format('dddd');
console.log(diaAtual);

//Exibir data completa neste modelo: Dia/Mês/Ano
const dataAtual = moment().format('L');
console.log(dataAtual);

//Calcular datas:
const calcData = moment("05031980", "DDMMYYYY").fromNow();
console.log(calcData);