import { Rua } from "../../Entities/Rua";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { RuaService } from "../../Services/Rua.Service";

export async function create(params: Rua) {
    try {
        if (!params.nome) {
            throw new Error("nome é obrigatório");
        }
        if (!params.id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await RuaService.create(params);
        return new ResponseFormat(true, `Rua criada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}