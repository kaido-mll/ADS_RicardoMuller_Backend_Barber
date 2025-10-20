import { ResponseFormat } from "../../Models/ResponseFormat";
import { RotaLeituraService } from "../../Services/RotaLeitura.Service";

// Buscar por ID
export async function getById(id: number) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }
        const data = await RotaLeituraService.getById(id);
       {
            return new ResponseFormat(false, `Rota de Leitura com ID ${id} não encontrada.`, null);
        }
        return new ResponseFormat(true, `Busca por Rota de Leitura realizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}

// Buscar por ID_ENTIDADE
export async function getByIdEntidade(id_entidade: number) {
    try {
        if (!id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await RotaLeituraService.getByIdEntidade(id_entidade);
        if (!data || data.length === 0) {
            return new ResponseFormat(false, `Nenhuma Rota de Leitura encontrada para a entidade com ID ${id_entidade}.`, null);
        }
        return new ResponseFormat(true, `Busca por Rota de Leitura realizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
