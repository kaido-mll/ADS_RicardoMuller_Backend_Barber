import { Conta } from "../../Entities/Conta";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { ContaService } from "../../Services/Conta.Service";

// Atualizar
export async function update(id: number, params: Partial<Conta>) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }
        const data = await ContaService.update(id, params);
        return new ResponseFormat(true, `Conta atualizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
