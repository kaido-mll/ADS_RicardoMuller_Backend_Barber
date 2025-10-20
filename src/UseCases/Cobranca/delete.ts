import { ResponseFormat } from "../../Models/ResponseFormat";
import { CobrancaService } from "../../Services/Cobranca.Service";

// Deletar por ID
export async function del(id: number) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }

        const result = await CobrancaService.delete(id);

        if (!result || result.affected === 0) {
            return new ResponseFormat(false, `Nenhuma cobrança encontrada com ID ${id} para deletar.`, null);
        }

        return new ResponseFormat(true, "Cobrança deletada com sucesso!", result);
    } catch (error) {
        throw error;
    }
}