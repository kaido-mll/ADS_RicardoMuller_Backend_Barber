import { Barbearia } from "../../Entities/Barbearia";
import { ErroMotivo } from "../../Models/ErroMotivo";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BarbeariaService } from "../../Services/Barbearia.Service";
import { duplicidade } from "./validacoes/duplicidade";
import { verificacao } from "./validacoes/verficacoes";

export async function create(params: Barbearia) {
    const erros = [] as ErroMotivo[];
    try {
        //duplicidade
        erros.push(...await duplicidade(params));
        //validações
        erros.push(...await verificacao(params));
        if (erros.length > 0) {
            return new ResponseFormat(false, `Erros de validação`, erros);
        }
        const data = await BarbeariaService.create(params);
        return new ResponseFormat(true, `Barbearia criada com sucesso!`, data);
    } catch (error: any) {
        erros.push({
            variavel: "",
            motivo: "Erro inesperado ao criar Usuario",
            valor: error.message || error,
        });
        return new ResponseFormat(false, "Erro inesperado ao criar barbearia", erros);
    }
}