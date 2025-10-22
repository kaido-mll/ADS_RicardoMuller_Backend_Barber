import { ResponseFormat } from "../../Models/ResponseFormat";
import { AgendamentoService } from "../../Services/Agendamento.Service";

export async function del(id: number) {
    try {
        const operation = await AgendamentoService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Agendamento deletado com sucesso!`, {});
        }
        return new ResponseFormat(false, `Agendamento não encontrado para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
