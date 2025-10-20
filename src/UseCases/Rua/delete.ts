import { ResponseFormat } from "../../Models/ResponseFormat";
import { RuaService } from "../../Services/Rua.Service";

export async function del(id: number) {
    try {
        const operation = await RuaService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Rua deletada com sucesso!`, {});
        }
        return new ResponseFormat(false, `Rua não encontrada para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
