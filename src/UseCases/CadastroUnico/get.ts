import { CadastroUnico } from "../../Entities/CadastroUnico";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { CadastroUnicoService } from "../../Services/CadastroUnico.Service";

// Buscar por ID
export async function getById(id: number) {
    try {
        const data = await CadastroUnicoService.getById(id);
        if (!data) {
            return new ResponseFormat(false, `Cadastro Único não encontrado!`,{});
        }
        return new ResponseFormat(true, `Cadastro Único encontrado!`, data);
    } catch (error) {
        throw error;
    }
}


// Listar todos
export async function getByIdEntidade(id_entidade:number) {
    try {
        const data = await CadastroUnicoService.getByIdEntidade(id_entidade);
        return new ResponseFormat(true, `Lista de Cadastros Únicos obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}