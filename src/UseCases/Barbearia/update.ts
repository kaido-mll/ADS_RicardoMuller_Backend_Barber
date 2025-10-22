import { Barbearia } from "../../Entities/Barbearia";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BarbeariaService } from "../../Services/Barbearia.Service";

export async function update(id: number, params: Partial<Barbearia>) {
    try {
        const operation = await BarbeariaService.update(id, params);
        if (operation.affected && operation.affected > 0) {
            const data = await BarbeariaService.getById(id);
            return new ResponseFormat(true, `Barbearia atualizado com sucesso!`, data);
        }
        return new ResponseFormat(false, `Barbearia não encontrado para atualização!`, {});
    } catch (error) {
        throw error;
    }
}
