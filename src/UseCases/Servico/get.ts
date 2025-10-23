import { emit } from "process";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { ServicoService } from "../../Services/Servico.Service";

/**
 * Buscar Servico por ID
 */
export async function getById(id: number) {
    try {
        const data = await ServicoService.getById(id);
       
          
        return new ResponseFormat(true, `Servico encontrado!`, data);
    } catch (error) {
        throw error;
    }
}


