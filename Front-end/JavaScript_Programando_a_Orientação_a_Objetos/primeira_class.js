// Trabalhando com Class
class client {
    //Atributos:
    nome;
    cpf;
    agencia;
    saldo;
}

// Chamando Class para criar um novo objeto
const client1 = new client();
const client2 = new client();

// Atributos da instancia client1
client1.nome = "Paulo";
client1.cpf = 11122233309;
client1.agencia = 1001;
client1.saldo = 100;

// Atributos da instancia client2
client2.nome = "Livia";
client2.cpf = 88822233309;
client2.agencia = 1001;
client2.saldo = 0;

// Exemplo de transferencia de saldo bem simples usando `Template Literal`
console.log(`Cliente ${client1.nome}, tem R$ ${client1.saldo} de saldo e transferiu R$ 90,00 para: ${client2.nome}\n`);

// Removendo saldo do client1
client1.saldo -= 90;

// Atribuindo valor ao atributo saldo da client2
client2.saldo += 90;

// Exibir saldo usando `Template Literal`
console.log(`O saldo da cliente: ${client1.nome} agora é de: R$ ${client1.saldo}`);
console.log(`O saldo do cliente: ${client2.nome} agora é de: R$ ${client2.saldo}`);