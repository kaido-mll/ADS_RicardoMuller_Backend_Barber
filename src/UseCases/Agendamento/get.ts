import { emit } from "process";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { AgendamentoService } from "../../Services/Agendamento.Service";

/**
 * Buscar Agendamento por ID
 */
export async function getById(id: number) {
    try {
        const data = await AgendamentoService.getById(id);
       
          
        return new ResponseFormat(true, `Agendamento encontrado!`, data);
    } catch (error) {
        throw error;
    }
}

