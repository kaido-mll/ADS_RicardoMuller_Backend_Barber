import { ResponseFormat } from "../../Models/ResponseFormat";
import { RuaService } from "../../Services/Rua.Service";

/**
 * Buscar Rua por ID
 */
export async function getById(id: number) {
    try {
        const data = await RuaService.getById(id);
        
        // Esta verificação agora funciona para um array vazio
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Rua com ID ${id} não encontrada.`, null);
        }
        
        return new ResponseFormat(true, `Rua encontrada!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Ruas por ID_ENTIDADE
 */
export async function getByIdEntidade(id_entidade: number) {
    try {
        const data = await RuaService.getByIdEntidade(id_entidade);
        // Corrigido: A verificação agora funciona para um único objeto ou um array
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhuma rua encontrada para a entidade com ID ${id_entidade}.`, null);
        }
        return new ResponseFormat(true, `Lista de ruas obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
