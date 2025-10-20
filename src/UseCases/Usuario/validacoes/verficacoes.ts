import { ErroMotivo } from "../../../Models/ErroMotivo";
import { validarCpf, validarCnpj } from "../../../Utils/Validators";
import { Usuario } from "../../../Entities/Usuario";

export const verificacao = async (usuario: Usuario) => {
    const erros = [] as ErroMotivo[];
    //CAMPOS OBRIGATRORIOS
    if (!usuario.NOME) {
        erros.push({ variavel: "NOME", motivo: "O nome deve ser preenchido", valor: usuario.NOME });
    }
    if (!usuario.CPF) {
        erros.push({ variavel: "CPF", motivo: "O CPF deve ser preenchido", valor: usuario.CPF });
    }
    if (!usuario.SENHA) {
        erros.push({ variavel: "SENHA", motivo: "Senha deve ser preenchida", valor: usuario.SENHA })
    }
    // VALIDAR CPF
    if (!validarCpf(usuario.CPF)) {
        erros.push({ variavel: "CPF", motivo: "O número do cpf informado é inválido", valor: usuario.CPF })
    }
    return erros;
}