import { emit } from "process";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { UsuarioService } from "../../Services/Usuario.Service";

/**
 * Buscar Usuario por ID
 */
export async function getById(id: number) {
    try {
        const data = await UsuarioService.getById(id);
       
          
        return new ResponseFormat(true, `Usuario encontrado!`, data);
    } catch (error) {
        throw error;
    }
}

/**
 * Buscar Usuarios por CPF
 */
export async function getCpf(CPF: string) {
    try {
        const data = await UsuarioService.getCpf(CPF);
        // Corrigido: A verificação agora funciona para um único objeto ou um array
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return new ResponseFormat(false, `Nenhum Usuario encontrado para o CPF: ${CPF}}.`, null);
        }
        return new ResponseFormat(true, `Lista de Usuarios obtida com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}
