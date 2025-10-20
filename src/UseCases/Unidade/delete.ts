import { ResponseFormat } from "../../Models/ResponseFormat";
import { UnidadeService } from "../../Services/Unidade.Service";

export async function del(id: number) {
    try {
        const operation = await UnidadeService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Unidade deletada com sucesso!`, {});
        }
        return new ResponseFormat(false, `Unidade não encontrada para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
