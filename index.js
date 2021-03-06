import{Cliente} from "./Cliente.js"
import{Gerente} from "./Funcionarios/Gerente.js"
import{Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Marcos", 5000, 1234567654321);
gerente.cadastrarSenha("123")
const cliente = new Cliente("Lais", 9876, "456");


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");




console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);