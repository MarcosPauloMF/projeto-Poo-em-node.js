import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Conta } from "./Conta/Conta.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Marcos", 1112223309);

const ContaCorrenteMarcos = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaCorrente(50, cliente1, 1001);
const contaSalario = new ContaSalario (cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);