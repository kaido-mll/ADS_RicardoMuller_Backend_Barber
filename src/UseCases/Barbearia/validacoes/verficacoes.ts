import { ErroMotivo } from "../../../Models/ErroMotivo";
import { validarCpf, validarCnpj } from "../../../Utils/Validators";
import { Usuario } from "../../../Entities/Usuario";
import { Barbearia } from "../../../Entities/Barbearia";

export const verificacao = async (barbearia: Barbearia) => {
    const erros = [] as ErroMotivo[];
    //CAMPOS OBRIGATRORIOS
    if (!barbearia.nome) {
        erros.push({ variavel: "NOME", motivo: "O nome deve ser preenchido", valor: barbearia.nome });
    }
    if (!barbearia.cnpj) {
        erros.push({ variavel: "CNPJ", motivo: "O CNPJ deve ser preenchido", valor: barbearia.cnpj });
    }
    if (!barbearia.bairro) {
        erros.push({ variavel: "BAIRRO", motivo: "Bairro deve ser preenchida", valor: barbearia.bairro })
    }
    if (!barbearia.rua) {
        erros.push({ variavel: "RUA", motivo: "Rua deve ser preenchida", valor: barbearia.rua })
    }
    if (!barbearia.bairro) {
        erros.push({ variavel: "BAIRRO", motivo: "Bairro deve ser preenchida", valor: barbearia.bairro })
    }
    // VALIDAR CPF
    if (!validarCnpj(barbearia.cnpj)) {
        erros.push({ variavel: "CNPJ", motivo: "O número do cnpj informado é inválido", valor: barbearia.cnpj })
    }
    return erros;
}