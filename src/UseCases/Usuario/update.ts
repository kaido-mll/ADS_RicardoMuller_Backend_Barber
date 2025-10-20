import { Usuario } from "../../Entities/Usuario";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { UsuarioService } from "../../Services/Usuario.Service";

export async function update(id: number, params: Partial<Usuario>) {
    try {
        const operation = await UsuarioService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await UsuarioService.getById(id);
            return new ResponseFormat(true, `Usuario atualizado com sucesso!`, data);
        }
        return new ResponseFormat(false, `Usuario não encontrado para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
