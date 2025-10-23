import { ErroMotivo } from "../../../Models/ErroMotivo";
import { validarCpf, validarCnpj } from "../../../Utils/Validators";
import { Agendamento } from "../../../Entities/Agendamento";
import { AgendamentoService } from "../../../Services/Agendamento.Service";

// Função auxiliar para obter o ID, mesmo que venha como objeto ou string/number
const getId = (value: any): number | string | undefined => {
    if (!value) return undefined;
    if (typeof value === "object") {
        return (value.ID ?? value.id) as number | string;
    }
    return value;
};

export const verificacao = async (agendamento: Agendamento) => {
    const erros = [] as ErroMotivo[];
    //CAMPOS OBRIGATRORIOS
    if (!agendamento.cliente) {
        erros.push({ variavel: "CLIENTE", motivo: "O cliente deve ser preenchido", valor: agendamento.cliente });
    }
    if (!agendamento.barbeiro) {
        erros.push({ variavel: "CPF", motivo: "O barbeiro deve ser preenchido", valor: agendamento.barbeiro });
    }
    if (!agendamento.barbearia) {
        erros.push({ variavel: "SENHA", motivo: "A barbearia deve ser preenchida", valor: agendamento.barbearia })
    }
    if (!agendamento.servico) {
        erros.push({ variavel: "servico", motivo: "O serviço deve ser preenchido", valor: agendamento.servico })
    }
    if (!agendamento.data) {
        erros.push({ variavel: "DATA", motivo: "A data deve ser preenchida", valor: agendamento.data });
    }
    if (!agendamento.hora) {
        erros.push({ variavel: "HORA", motivo: "A hora deve ser preenchida", valor: agendamento.hora });
    }
    // VERIFICAÇÃO DE DUPLICIDADE DE HORÁRIO
    if (agendamento.id_barbeiro && agendamento.id_usuario && agendamento.data && agendamento.hora) {
        const existente = await AgendamentoService.getByHorario(
            agendamento.id_barbeiro,
            agendamento.id_usuario,
            agendamento.data,
            agendamento.hora
        );

        if (existente) {
            erros.push({
                variavel: "HORARIO",
                motivo: "Já existe um agendamento neste horário para este barbeiro e cliente",
                valor: `${agendamento.data} ${agendamento.hora}`
            });
        }
    }


    return erros;
}