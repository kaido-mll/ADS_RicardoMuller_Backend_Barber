import { RotaLeitura } from "../../Entities/RotaLeitura";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { RotaLeituraService } from "../../Services/RotaLeitura.Service";

// Atualizar
export async function update(id: number, params: Partial<RotaLeitura>) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }
        const data_ = await RotaLeituraService.update(id, params);
         const data = await RotaLeituraService.getById(id);
        return new ResponseFormat(true, `Rota de Leitura atualizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
