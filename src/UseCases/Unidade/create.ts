import { Unidade } from "../../Entities/Unidade";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { UnidadeService } from "../../Services/Unidade.Service";

export async function create(params: Unidade) {
    try {
        if (!params.id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await UnidadeService.create(params);
        return new ResponseFormat(true, `Unidade criada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
