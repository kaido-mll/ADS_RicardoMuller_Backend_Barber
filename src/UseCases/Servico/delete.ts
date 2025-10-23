import { ResponseFormat } from "../../Models/ResponseFormat";
import { ServicoService } from "../../Services/Servico.Service";

export async function del(id: number) {
    try {
        const operation = await ServicoService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Servico deletado com sucesso!`, {});
        }
        return new ResponseFormat(false, `Servico não encontrado para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
