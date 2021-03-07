import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Marcos", 1112223309);
const cliente2 = new Cliente("Alice", 3332223309);

const ContaCorrenteMarcos = new ContaCorrente(1001, cliente1);

ContaCorrenteMarcos.depositar(500);
const conta2 = new ContaCorrente(1001, cliente1);

let valor = 200;
ContaCorrenteMarcos.transferir(200, conta2);
console.log(ContaCorrenteMarcos);


console.log(ContaCorrente.numeroDeContas);