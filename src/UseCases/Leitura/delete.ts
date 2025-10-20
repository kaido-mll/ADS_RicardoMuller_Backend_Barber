import { ResponseFormat } from "../../Models/ResponseFormat";
import { LeituraService } from "../../Services/Leitura.Service";

export async function del(id: number) {
    try {
        const operation = await LeituraService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Leitura deletada com sucesso!`, {});
        }
        return new ResponseFormat(false, `Leitura não encontrada para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
