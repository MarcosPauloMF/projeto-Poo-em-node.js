class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();


cliente1.nome = "Marcos";
cliente1.cpf = "1112223309";
cliente1.agencia = "1001";
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = "3332223309";
cliente2.agencia = "1001";
cliente2.saldo = 0;

cliente3.nome = "Roberto";
cliente3.cpf = "3332223309";
cliente3.agencia = "1001";
cliente3.saldo = 0;

console.log(cliente1, cliente2);