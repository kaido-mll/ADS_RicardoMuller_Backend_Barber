import { ResponseFormat } from "../../Models/ResponseFormat";
import { UnidadeService } from "../../Services/Unidade.Service";

/**
 * Buscar Unidade por ID
 */
export async function getById(id: number) {
    try {
        const data = await UnidadeService.getById(id);
      {
            return new ResponseFormat(false, `Unidade com ID ${id} não encontrada.`, null);
        }
        return new ResponseFormat(true, `Unidade encontrada!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Unidades por ID_ENTIDADE
 */
export async function getByIdEntidade(id_entidade: number) {
    try {
        const data = await UnidadeService.getByIdEntidade(id_entidade);
        // Corrigido: A verificação agora funciona para um único objeto ou um array
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhuma unidade encontrada para a entidade com ID ${id_entidade}.`, null);
        }
        return new ResponseFormat(true, `Lista de unidades obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
