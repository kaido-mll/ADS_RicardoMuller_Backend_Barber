import { ErroMotivo } from "../../../Models/ErroMotivo";
import { validarCpf, validarCnpj } from "../../../Utils/Validators";
import { Usuario } from "../../../Entities/Usuario";

export const verificacao = async (usuario: Usuario) => {
    const erros: ErroMotivo[] = [];

    // CAMPOS OBRIGATÓRIOS
    if (!usuario.nome) {
        erros.push({ variavel: "NOME", motivo: "O nome deve ser preenchido", valor: usuario.nome });
    }
    if (!usuario.cpf) {
        erros.push({ variavel: "CPF", motivo: "O CPF deve ser preenchido", valor: usuario.cpf });
    } else if (!validarCpf(usuario.cpf)) {
        //SÓ VALIDA O CAMPO SE FOR INFORMADO
        erros.push({ variavel: "CPF", motivo: "O número do cpf informado é inválido", valor: usuario.cpf });
    }
    if (!usuario.senha) {
        erros.push({ variavel: "SENHA", motivo: "Senha deve ser preenchida", valor: usuario.senha });
    }

    return erros;
};
