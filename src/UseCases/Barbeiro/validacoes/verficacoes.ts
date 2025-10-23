import { ErroMotivo } from "../../../Models/ErroMotivo";
import { validarCpf, validarCnpj } from "../../../Utils/Validators";
import { Barbeiro } from "../../../Entities/Barbeiro";

export const verificacao = async (barbeiro: Barbeiro) => {
    const erros = [] as ErroMotivo[];
    //CAMPOS OBRIGATRORIOS
    if (!barbeiro.nome) {
        erros.push({ variavel: "NOME", motivo: "O nome deve ser preenchido", valor: barbeiro.nome });
    }
    if (!barbeiro.cpf) {
        erros.push({ variavel: "CPF", motivo: "O CPF deve ser preenchido", valor: barbeiro.cpf });
    }
    // VALIDAR CPF
    if (!validarCpf(barbeiro.cpf)) {
        erros.push({ variavel: "CPF", motivo: "O número do cpf informado é inválido", valor: barbeiro.cpf })
    }
    return erros;
}