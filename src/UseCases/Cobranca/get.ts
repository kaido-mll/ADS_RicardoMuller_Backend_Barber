import { ResponseFormat } from "../../Models/ResponseFormat";
import { CobrancaService } from "../../Services/Cobranca.Service";

// Buscar por ID
export async function getById(id: number) {
    try {
        if (!id) {
            throw new Error("id é obrigatório");
        }
        const data = await CobrancaService.getById(id);
       {
            return new ResponseFormat(false, `Nenhuma cobrança encontrada com ID ${id}.`, null);
        }
        return new ResponseFormat(true, `Busca por Cobrança realizada com sucesso!`, data);
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
        const data = await CobrancaService.getByIdEntidade(id_entidade);

        if (!data || data.length === 0) {
            return new ResponseFormat(false, `Nenhuma cobrança encontrada para a entidade com ID ${id_entidade}.`, null);
        }

        return new ResponseFormat(true, `Busca por Cobrança realizada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}


export async function getCompletaByIdEntidadePeriodo(id_entidade: number,periodo:string) {
    try {
        if (!id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }
        const data = await CobrancaService.getCompletaByIdEntidadePeriodo(id_entidade,periodo);

        if (!data || data.length === 0) {
            return new ResponseFormat(false, `Nenhuma cobrança encontrada para a entidade com ID ${id_entidade}.`, null);
        }

        return new ResponseFormat(true, `Busca por Cobrança realizada com sucesso!`, data);
    } catch (error) {
        console.log(error)
        throw error;
    }
}



