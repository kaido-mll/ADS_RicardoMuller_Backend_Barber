import { ResponseFormat } from "../../Models/ResponseFormat";
import { CobrancaService } from "../../Services/Cobranca.Service";
import { Cobranca } from "../../Entities/Cobranca";

// Atualizar registro
export async function update(id: number, params: Partial<Cobranca>) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }
        if (!params || Object.keys(params).length === 0) {
            throw new Error("Parâmetros para atualização são obrigatórios");
        }

        const result = await CobrancaService.update(id, params);

        if (!result || result.affected === 0) {
            return new ResponseFormat(false, `Nenhuma cobrança encontrada com ID ${id} para atualizar.`, null);
        }

        const data = await CobrancaService.getById(id);
        return new ResponseFormat(true, `Cobrança atualizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}