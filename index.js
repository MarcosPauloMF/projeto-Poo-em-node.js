import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Marcos", 1112223309);

const ContaCorrenteMarcos = new ContaCorrente(cliente1, 1001);
ContaCorrenteMarcos.depositar(500);
ContaCorrenteMarcos.sacar(100);
//const Conta2 = new ContaCorrente(1001, cliente1);

const contaPoupanca = new ContaCorrente(50, cliente1, 1001);
contaPoupanca.sacar(10);


console.log(contaPoupanca);
console.log(ContaCorrenteMarcos);
