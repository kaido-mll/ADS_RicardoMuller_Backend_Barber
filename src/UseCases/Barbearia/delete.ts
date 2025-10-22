import { ResponseFormat } from "../../Models/ResponseFormat";
import { BarbeariaService } from "../../Services/Barbearia.Service";

export async function del(id: number) {
    try {
        const operation = await BarbeariaService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Barbearia deletado com sucesso!`, {});
        }
        return new ResponseFormat(false, `Barbearia não encontrado para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
