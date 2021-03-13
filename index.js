import{Cliente} from "./Cliente.js"
import{Gerente} from "./Funcionarios/Gerente.js"
import{Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Marcos", 5000, 1234567654321);
gerente.cadastrarSenha("123")

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(estaLogado);