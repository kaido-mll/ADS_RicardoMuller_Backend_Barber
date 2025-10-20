import { Leitura } from "../../Entities/Leitura";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { LeituraService } from "../../Services/Leitura.Service";

export async function create(params: Leitura) {
    try {
        if (!params.id_conta) {
            throw new Error("id_conta é obrigatório");
        }
        if (!params.leitura_anterior) {
            throw new Error("leitura_anterior é obrigatório");
        }
        if (!params.leitura_atual) {
            throw new Error("leitura_atual é obrigatório");
        }
        const data = await LeituraService.create(params);
        return new ResponseFormat(true, `Leitura criada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
