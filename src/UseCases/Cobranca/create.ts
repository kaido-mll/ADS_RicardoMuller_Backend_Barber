import { ResponseFormat } from "../../Models/ResponseFormat";
import { CobrancaService } from "../../Services/Cobranca.Service";
import { Cobranca } from "../../Entities/Cobranca";

// Criar registro
export async function create(params: Cobranca) {
    try {
        if (!params) {
            throw new Error("Parâmetros para criação são obrigatórios");
        }
        const data = await CobrancaService.create(params);
        return new ResponseFormat(true, 'Cobrança criada com sucesso!', data);
    } catch (error) {
        throw error;
    }
}