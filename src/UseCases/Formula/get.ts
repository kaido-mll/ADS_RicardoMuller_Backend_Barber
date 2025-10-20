import { ResponseFormat } from "../../Models/ResponseFormat";
import { FormulaService } from "../../Services/Formula.Service";

/**
 * Buscar Fórmula por ID
 */
export async function getById(id: number) {
    try {
        const data = await FormulaService.getById(id);
        if (!data) {
            return new ResponseFormat(false, `Fórmula com ID ${id} não encontrada.`, null);
        }
        return new ResponseFormat(true, `Fórmula encontrada!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Fórmulas por ID_ENTIDADE
 */
export async function getByIdEntidade(id_entidade: number) {
    try {
        const data = await FormulaService.getByIdEntidade(id_entidade);
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhuma fórmula encontrada para a entidade com ID ${id_entidade}.`, null);
        }
        return new ResponseFormat(true, `Lista de fórmulas obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Fórmulas por ID_USUARIO
 */
export async function getByIdUsuario(id_usuario: number) {
    try {
        const data = await FormulaService.getByIdUsuario(id_usuario);
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhuma fórmula encontrada para o usuário com ID ${id_usuario}.`, null);
        }
        return new ResponseFormat(true, `Lista de fórmulas obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
