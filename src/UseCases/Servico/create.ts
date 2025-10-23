import { Servico } from "../../Entities/Servico";
import { ErroMotivo } from "../../Models/ErroMotivo";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { ServicoService } from "../../Services/Servico.Service";
import { validarCpf, validarCnpj } from "../../Utils/Validators";
import { verificacao } from "./validacoes/verficacoes";

export async function create(params: Servico) {
    const erros = [] as ErroMotivo[];
    try {
        //validações
        erros.push(...await verificacao(params));
        if (erros.length > 0) {
            return new ResponseFormat(false, `Erros de validação`, erros);
        }
        const data = await ServicoService.create(params);
        return new ResponseFormat(true, `Servico criada com sucesso!`, data);
    } catch (error: any) {
        erros.push({
            variavel: "",
            motivo: "Erro inesperado ao criar Servico",
            valor: error.message || error,
        });
        return new ResponseFormat(false, "Erro inesperado ao criar Servico", erros);
    }
}