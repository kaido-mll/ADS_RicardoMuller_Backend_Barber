import { CadastroUnico } from "../../Entities/CadastroUnico";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { CadastroUnicoService } from "../../Services/CadastroUnico.Service";


// Deletar
export async function del(id: number) {
    try {
        const data = await CadastroUnicoService.delete(id);
        return new ResponseFormat(true, `Cadastro Único removido com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}