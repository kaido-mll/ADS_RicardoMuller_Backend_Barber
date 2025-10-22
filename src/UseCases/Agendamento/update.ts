import { Agendamento } from "../../Entities/Agendamento";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { AgendamentoService } from "../../Services/Agendamento.Service";

export async function update(id: number, params: Partial<Agendamento>) {
    try {
        const operation = await AgendamentoService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await AgendamentoService.getById(id);
            return new ResponseFormat(true, `Agendamento atualizado com sucesso!`, data);
        }
        return new ResponseFormat(false, `Agendamento não encontrado para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
