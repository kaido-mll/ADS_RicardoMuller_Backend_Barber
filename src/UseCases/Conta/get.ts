import { Conta } from "../../Entities/Conta";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { ContaService } from "../../Services/Conta.Service";

// Buscar por ID
export async function getById(id: number) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }
        const data:Conta = await ContaService.getById(id);
        if (!data) {
            return new ResponseFormat(false, `Nenhuma conta encontrada com ID ${id}.`, null);
        }
        return new ResponseFormat(true, `Busca por Conta realizada com sucesso!`, data);
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
        const data = await ContaService.getByIdEntidade(id_entidade);

        if (!data || data.length === 0) {
            return new ResponseFormat(false, `Nenhuma conta encontrada para a entidade com ID ${id_entidade}.`, null);
        }

        return new ResponseFormat(true, `Busca por Conta realizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}

// Buscar por ID_ENTIDADE LISTA COMPLETA
export async function getByIdEntidadeListaCompleta(id_entidade: number) {
    try {
        if (!id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await ContaService.getByIdEntidadeListaCompleta(id_entidade);

        if (!data || data.length === 0) {
            return new ResponseFormat(false, `Nenhuma conta encontrada para a entidade com ID ${id_entidade}.`, null);
        }

        return new ResponseFormat(true, `Busca por Conta realizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}




