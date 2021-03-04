class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Marcos";
cliente1.cpf = "1112223309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "3332223309";

const ContaCorrenteMarcos = new ContaCorrente();
ContaCorrenteMarcos.saldo = 0;
ContaCorrenteMarcos.agencia = 1001;

console.log(ContaCorrenteMarcos.saldo);
ContaCorrenteMarcos.saldo = 100;
console.log(ContaCorrenteMarcos.saldo);
ContaCorrenteMarcos.sacar(50);




console.log(ContaCorrenteMarcos.saldo);
console.log(cliente1);
console.log(cliente2);