import { Servico } from "../../Entities/Servico";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { ServicoService } from "../../Services/Servico.Service";

export async function update(id: number, params: Partial<Servico>) {
    try {
        const operation = await ServicoService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await ServicoService.getById(id);
            return new ResponseFormat(true, `Servico atualizado com sucesso!`, data);
        }
        return new ResponseFormat(false, `Servico não encontrado para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
