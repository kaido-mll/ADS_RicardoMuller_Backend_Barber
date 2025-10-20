import { Leitura } from "../../Entities/Leitura";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { LeituraService } from "../../Services/Leitura.Service";

export async function update(id: number, params: Partial<Leitura>) {
    try {
        const operation = await LeituraService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await LeituraService.getById(id);
            return new ResponseFormat(true, `Leitura atualizada com sucesso!`, data);
        }
        return new ResponseFormat(false, `Leitura não encontrada para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
