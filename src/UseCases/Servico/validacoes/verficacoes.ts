import { ErroMotivo } from "../../../Models/ErroMotivo";
import { validarCpf, validarCnpj } from "../../../Utils/Validators";
import { Servico } from "../../../Entities/Servico";

export const verificacao = async (servico: Servico) => {
    const erros = [] as ErroMotivo[];
    //CAMPOS OBRIGATRORIOS
    if (!servico.descricao) {
        erros.push({ variavel: "NOME", motivo: "A descrição deve ser preenchido", valor: servico.descricao });
    }
    if (!servico.valor) {
        erros.push({ variavel: "VALOR", motivo: "O valor deve ser preenchido", valor: servico.valor });
    }
    if (!servico.duracao) {
        erros.push({ variavel: "DURACAO", motivo: "Duração do serviço deve ser preenchida", valor: servico.duracao })
    }
    return erros;
}