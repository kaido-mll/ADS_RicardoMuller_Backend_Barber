import { ErroMotivo } from "../../../Models/ErroMotivo";
import { Barbeiro } from "../../../Entities/Barbeiro";
import { BarbeiroService } from "../../../Services/Barbeiro.Service";

export const duplicidade = async (barbeiro: Barbeiro) => {
    const erros = [] as ErroMotivo[];

    // Verificação de duplicidade
    const existingBarbeiro = await BarbeiroService.getCpf(barbeiro.cpf,);
    if (existingBarbeiro) {
        erros.push({
            variavel: "CPF",
            motivo: `Já existe um Barbeiro cadastrado com o CPF: ${barbeiro.cpf} `,
            valor: barbeiro.cpf
        });
    }

    return erros;
}