console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `S√£o Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//let new = 2;  //new È uma palavra reservada e n„o pode
//ser usada como variavel

const listaDeDestinos = new Array(
    `Salvador`,
    `S√£o Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log("Destinos poss√≠veis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);