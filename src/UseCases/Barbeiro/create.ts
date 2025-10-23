import { Barbeiro } from "../../Entities/Barbeiro";
import { ErroMotivo } from "../../Models/ErroMotivo";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { BarbeiroService } from "../../Services/Barbeiro.Service";
import { validarCpf, validarCnpj } from "../../Utils/Validators";
import { duplicidade } from "./validacoes/duplicidade";
import { verificacao } from "./validacoes/verficacoes";

export async function create(params: Barbeiro) {
    const erros = [] as ErroMotivo[];
    try {
        //duplicidade
        erros.push(...await duplicidade(params));
        //validações
        erros.push(...await verificacao(params));
        if (erros.length > 0) {
            return new ResponseFormat(false, `Erros de validação`, erros);
        }
        const data = await BarbeiroService.create(params);
        return new ResponseFormat(true, `Barbeiro criada com sucesso!`, data);
    } catch (error: any) {
        erros.push({
            variavel: "",
            motivo: "Erro inesperado ao criar Barbeiro",
            valor: error.message || error,
        });
        return new ResponseFormat(false, "Erro inesperado ao criar Barbeiro", erros);
    }
}