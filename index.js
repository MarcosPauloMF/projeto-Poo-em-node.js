import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Marcos", 1112223309);

const ContaCorrenteMarcos = new ContaCorrente( 0, cliente1, 1001);
ContaCorrenteMarcos.depositar(500);
ContaCorrenteMarcos.sacar(100);
//const Conta2 = new ContaCorrente(1001, cliente1);

const ContaPoupanca = new ContaCorrente( 50, cliente1, 1001);
ContaPoupanca.sacar(10);


console.log(ContaPoupanca);
console.log(ContaCorrenteMarcos);
