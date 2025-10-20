import { Bairro } from "../../Entities/Bairro";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BairroService } from "../../Services/Bairro.Service";

export async function create(params: Bairro) {
    try {
        if (!params.nome) {
            throw new Error("nome é obrigatório");
        }
        if (!params.id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await BairroService.create(params);
        return new ResponseFormat(true, `Bairro criado com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
