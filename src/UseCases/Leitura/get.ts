import { emit } from "process";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { LeituraService } from "../../Services/Leitura.Service";

/**
 * Buscar Leitura por ID
 */
export async function getById(id: number) {
    try {
        const data = await LeituraService.getById(id);
       
          
        return new ResponseFormat(true, `Leitura encontrada!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Leitura por ID_ENTIDADE
 */
export async function getByIdEntidade(id_entidade: number) {
    try {
        const data = await LeituraService.getByIdEntidade(id_entidade);
        // Corrigido: A verificação agora funciona para um único objeto ou um array
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhuma Leitura encontrada para a entidade com ID ${id_entidade}.`, null);
        }
        return new ResponseFormat(true, `Lista de Leituras obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
