import { CadastroUnico } from "../../Entities/CadastroUnico";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { CadastroUnicoService } from "../../Services/CadastroUnico.Service";


// Atualizar
export async function update(id: number, params: Partial<CadastroUnico>) { // Aceita id e params
    try {
        const data = await CadastroUnicoService.update(id, params); // Passa o id para o service
        return new ResponseFormat(true, `Cadastro Único atualizado com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}