import { Vencimento } from "../../Entities/Vencimento";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { VencimentoService } from "../../Services/Vencimento.Service";

export async function create(params: Vencimento) {
    try {
        if (!params.id_usuario) {
            throw new Error("id_usuario é obrigatório");
        }
        if (!params.id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await VencimentoService.create(params);
        return new ResponseFormat(true, `Vencimento criado com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
