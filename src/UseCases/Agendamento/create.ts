import { Agendamento } from "../../Entities/Agendamento";
import { ErroMotivo } from "../../Models/ErroMotivo";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { AgendamentoService } from "../../Services/Agendamento.Service";
import { validarCpf, validarCnpj } from "../../Utils/Validators";
import { verificacao } from "./validacoes/verficacoes";

export async function create(params: Agendamento) {
    const erros = [] as ErroMotivo[];
    try {
        //validações
        erros.push(...await verificacao(params));
        if (erros.length > 0) {
            return new ResponseFormat(false, `Erros de validação`, erros);
        }
        const data = await AgendamentoService.create(params);
        return new ResponseFormat(true, `Agendamento criada com sucesso!`, data);
    } catch (error: any) {
        erros.push({
            variavel: "",
            motivo: "Erro inesperado ao criar Agendamento",
            valor: error.message || error,
        });
        return new ResponseFormat(false, "Erro inesperado ao criar Agendamento", erros);
    }
}