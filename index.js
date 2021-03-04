class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    //#saldo =0
    _saldo = 0;
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
        return valor;
    }

    depositar(valor){
        if(valor <=0 )
        {
            return;
        }
        this._saldo+= valor;   
    }
}
//usar retorno após if para receber valor corretamente
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