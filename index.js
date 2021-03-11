import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Marcos", 1112223309);

const ContaCorrenteMarcos = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaCorrente(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);

console.log(conta);