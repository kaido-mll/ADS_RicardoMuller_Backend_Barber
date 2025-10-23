import { ResponseFormat } from "../../Models/ResponseFormat";
import { BarbeiroService } from "../../Services/Barbeiro.Service";

export async function del(id: number) {
    try {
        const operation = await BarbeiroService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Barbeiro deletado com sucesso!`, {});
        }
        return new ResponseFormat(false, `Barbeiro não encontrado para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
