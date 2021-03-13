import { Funcionario } from "./Funcionario.js";

export class DIretor extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this.bonificacao = 2;
    }
}