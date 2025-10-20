import { Rua } from "../../Entities/Rua";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { RuaService } from "../../Services/Rua.Service";

export async function update(id: number, params: Partial<Rua>) {
    try {
        const operation = await RuaService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await RuaService.getById(id);
            return new ResponseFormat(true, `Rua atualizada com sucesso!`, data);
        }
        return new ResponseFormat(false, `Rua não encontrada para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
