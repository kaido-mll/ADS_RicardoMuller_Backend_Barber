import { emit } from "process";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { VencimentoService } from "../../Services/Vencimento.Service";

/**
 * Buscar Vencimento por ID
 */
export async function getById(id: number) {
    try {
        const data = await VencimentoService.getById(id);
       
          
        return new ResponseFormat(true, `Vencimento encontrado!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Vencimentos por ID_ENTIDADE
 */
export async function getByIdEntidade(id_entidade: number) {
    try {
        const data = await VencimentoService.getByIdEntidade(id_entidade);
        // Corrigido: A verificação agora funciona para um único objeto ou um array
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhum vencimento encontrado para a entidade com ID ${id_entidade}.`, null);
        }
        return new ResponseFormat(true, `Lista de vencimentos obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
