import { ResponseFormat } from "../../Models/ResponseFormat";
import { BairroService } from "../../Services/Bairro.Service";

export async function del(id: number) {
    try {
        const operation = await BairroService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Bairro deletado com sucesso!`, {});
        }
        return new ResponseFormat(false, `Bairro não encontrado para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
