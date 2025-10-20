import { Formula } from "../../Entities/Formula";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { FormulaService } from "../../Services/Formula.Service";

export async function create(params: Formula) {
    try {
        if (!params.modo_calculo) {
            throw new Error("modo_calculo é obrigatório");
        }
        if (!params.faixas) {
            throw new Error("faixas é obrigatório");
        }
        if (!params.id_usuario) {
            throw new Error("id_usuario é obrigatório");
        }
        if (!params.id_entidade) {
            throw new Error("id_entidade é obrigatório");
        }

        const data = await FormulaService.create(params);
        return new ResponseFormat(true, `Fórmula criada com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
