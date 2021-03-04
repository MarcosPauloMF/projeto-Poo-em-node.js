export class ContaCorrente {
    agencia;
    cliente;

    // _classe = atributo privado
    //#saldo =0
    _saldo = 0;
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <=0 )
        {
            return;
        }
        this._saldo+= valor;   
    }
    //tranferir = função
    //valor = valor anteriormente adicionado :P
    //conta = destino
    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
    //valorSacado = origen
    //sacar = destino
}