import { ResponseFormat } from "../../Models/ResponseFormat";
import { UsuarioService } from "../../Services/Usuario.Service";

export async function del(id: number) {
    try {
        const operation = await UsuarioService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Usuario deletado com sucesso!`, {});
        }
        return new ResponseFormat(false, `Usuario não encontrado para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
