import { Barbeiro } from "../../Entities/Barbeiro";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BarbeiroService } from "../../Services/Barbeiro.Service";

export async function update(id: number, params: Partial<Barbeiro>) {
    try {
        const operation = await BarbeiroService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await BarbeiroService.getById(id);
            return new ResponseFormat(true, `Barbeiro atualizado com sucesso!`, data);
        }
        return new ResponseFormat(false, `Barbeiro não encontrado para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
