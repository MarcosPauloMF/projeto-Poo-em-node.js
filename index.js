import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Marcos";
cliente1.cpf = "1112223309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "3332223309";


const ContaCorrenteMarcos = new ContaCorrente();
ContaCorrenteMarcos.agencia = 1001;
ContaCorrenteMarcos.cliente = cliente1;
ContaCorrenteMarcos.depositar(500);
console.log(ContaCorrenteMarcos);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2);

ContaCorrenteMarcos.transferir(200, conta2);

console.log(conta2);
console.log(ContaCorrenteMarcos);