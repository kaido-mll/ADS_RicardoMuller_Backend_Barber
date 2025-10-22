import { emit } from "process";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BarbeariaService } from "../../Services/Barbearia.Service";

/**
 * Buscar Barbearia por ID
 */
export async function getById(id: number) {
    try {
        const data = await BarbeariaService.getById(id);
       
          
        return new ResponseFormat(true, `Barbearia encontrado!`, data);
    } catch (error) {
        throw error;
    }
}


/*
 * Buscar Barbearia por cnpj
 */

export async function getByCnpj(cnpj: string) {
    try {
        const data = await BarbeariaService.getByCnpj(cnpj);


        return new ResponseFormat(true, `Barbearua encontrada`, data);
    } catch (error) {
        throw error;
    }
}
