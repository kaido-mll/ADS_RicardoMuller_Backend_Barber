import { emit } from "process";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BairroService } from "../../Services/Bairro.Service";

/**
 * Buscar Bairro por ID
 */
export async function getById(id: number) {
    try {
        const data = await BairroService.getById(id);
       
          
        return new ResponseFormat(true, `Bairro encontrado!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Bairros por ID_ENTIDADE
 */
export async function getByIdEntidade(id_entidade: number) {
    try {
        const data = await BairroService.getByIdEntidade(id_entidade);
        // Corrigido: A verificação agora funciona para um único objeto ou um array
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhum bairro encontrado para a entidade com ID ${id_entidade}.`, null);
        }
        return new ResponseFormat(true, `Lista de bairros obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
