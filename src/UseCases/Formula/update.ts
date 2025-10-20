import { Formula } from "../../Entities/Formula";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { FormulaService } from "../../Services/Formula.Service";

export async function update(id: number, params: Partial<Formula>) {
    try {
        const operation = await FormulaService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await FormulaService.getById(id);
            return new ResponseFormat(true, `Fórmula atualizada com sucesso!`, data);
        }
        return new ResponseFormat(false, `Fórmula não encontrada para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
