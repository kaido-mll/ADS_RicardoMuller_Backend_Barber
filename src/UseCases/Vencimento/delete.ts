import { ResponseFormat } from "../../Models/ResponseFormat";
import { VencimentoService } from "../../Services/Vencimento.Service";

export async function del(id: number) {
    try {
        const operation = await VencimentoService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Vencimento deletado com sucesso!`, {});
        }
        return new ResponseFormat(false, `Vencimento não encontrado para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
