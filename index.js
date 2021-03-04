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

ContaCorrenteMarcos.depositar (-100);
ContaCorrenteMarcos.depositar (100);
ContaCorrenteMarcos.depositar (100);

const valorSacado = ContaCorrenteMarcos.sacar(50);
console.log(valorSacado)


console.log(ContaCorrenteMarcos);



//criar package.json
//npm init
//"type": "module"