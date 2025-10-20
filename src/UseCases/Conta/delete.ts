import { ResponseFormat } from "../../Models/ResponseFormat";
import { ContaService } from "../../Services/Conta.Service";

// Deletar
export async function del(id: number) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }
        const data = await ContaService.delete(id);
        return new ResponseFormat(true, `Conta deletada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
