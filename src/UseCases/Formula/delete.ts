import { ResponseFormat } from "../../Models/ResponseFormat";
import { FormulaService } from "../../Services/Formula.Service";

export async function del(id: number) {
    try {
        const operation = await FormulaService.delete(id);
        if (operation.affected && operation.affected > 0) {
            return new ResponseFormat(true, `Fórmula deletada com sucesso!`, {});
        }
        return new ResponseFormat(false, `Fórmula não encontrada para exclusão!`, {});
    } catch (error) {
        throw error;
    }
}
