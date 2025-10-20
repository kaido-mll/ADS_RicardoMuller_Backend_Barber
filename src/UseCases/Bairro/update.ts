import { Bairro } from "../../Entities/Bairro";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BairroService } from "../../Services/Bairro.Service";

export async function update(id: number, params: Partial<Bairro>) {
    try {
        const operation = await BairroService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await BairroService.getById(id);
            return new ResponseFormat(true, `Bairro atualizado com sucesso!`, data);
        }
        return new ResponseFormat(false, `Bairro não encontrado para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
