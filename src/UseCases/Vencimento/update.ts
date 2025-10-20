import { Vencimento } from "../../Entities/Vencimento";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { VencimentoService } from "../../Services/Vencimento.Service";

export async function update(id: number, params: Partial<Vencimento>) {
    try {
        const operation = await VencimentoService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await VencimentoService.getById(id);
            return new ResponseFormat(true, `Vencimento atualizado com sucesso!`, data);
        }
        return new ResponseFormat(false, `Vencimento não encontrado para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
