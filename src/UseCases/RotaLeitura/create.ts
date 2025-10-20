import { RotaLeitura } from "../../Entities/RotaLeitura";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { RotaLeituraService } from "../../Services/RotaLeitura.Service";

// Criar
export async function create(params: RotaLeitura) {
    try {
        if (!params.nome) {
            throw new Error("nome é obrigatório");
        }
        if (!params.id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await RotaLeituraService.create(params);
        return new ResponseFormat(true, `Rota de Leitura criada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
