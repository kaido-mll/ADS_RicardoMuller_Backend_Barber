import { Conta } from "../../Entities/Conta";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { ContaService } from "../../Services/Conta.Service";

// Criar
export async function create(params: Conta) {
    try {
        if (!params.id_cadastro_unico) {
            throw new Error("id_cadastro_unico é obrigatório");
        }
        if (!params.tipo_ligacao) {
            throw new Error("tipo_ligacao é obrigatório");
        }
        if (!params.situacao) {
            throw new Error("situacao é obrigatória");
        }
        if (!params.id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }

        const data = await ContaService.create(params);
        return new ResponseFormat(true, `Conta criada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
