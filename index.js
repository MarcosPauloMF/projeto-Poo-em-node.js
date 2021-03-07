import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Marcos", 1112223309);

const cliente2 = new Cliente("Alice", 3332223309);
cliente2.cpf = -1

console.log(cliente2);


const ContaCorrenteMarcos = new ContaCorrente(1001, cliente1);
ContaCorrenteMarcos.depositar(500);
console.log(ContaCorrenteMarcos);
const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
ContaCorrenteMarcos.transferir(200, conta2);