import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }


    get cliente(){
        return this._cliente;
    }

    // _classe = atributo privado
    //#saldo =0
    _saldo = 0;
    
    get saldo(){
        return this.saldo;
    }

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
    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}













//valorSacado = origen
//sacar = destino


//um atributo é uma propriedade de um objeto
//metodos são ações de um objeto
//objetos é uma caracteristica de uma classe
//instanciar é um objeto com dados e funcionalidade
//classe 
//parametro é o nome que se dá a uma variável que possui função atribuida


//tranferir = classe
//valor = atributo
//conta =  atributo
//valorSacado = objeto