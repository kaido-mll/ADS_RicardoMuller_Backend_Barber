import { Unidade } from "../../Entities/Unidade";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { UnidadeService } from "../../Services/Unidade.Service";

export async function update(id: number, params: Partial<Unidade>) {
    try {
        const operation = await UnidadeService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await UnidadeService.getById(id);
            return new ResponseFormat(true, `Unidade atualizada com sucesso!`, data);
        }
        return new ResponseFormat(false, `Unidade não encontrada para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
