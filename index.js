import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Marcos", 1112223309);

const ContaCorrenteMarcos = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaCorrente(50, cliente1, 1001);
const contaSalario = new ContaSalario (cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);