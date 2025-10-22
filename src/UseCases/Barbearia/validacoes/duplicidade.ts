import { ErroMotivo } from "../../../Models/ErroMotivo";
import { Barbearia } from "../../../Entities/Barbearia";
import { BarbeariaService } from "../../../Services/Barbearia.Service";

export const duplicidade = async (barbearia: Barbearia) => {
    const erros = [] as ErroMotivo[];

    // 🔹 Normaliza o CNPJ (remove máscara, pontos, barras, traços)
    const cnpjLimpo = barbearia.cnpj.replace(/\D/g, "");

    // 🔹 Busca barbearia com mesmo CNPJ
    const existente = await BarbeariaService.getByCnpj(cnpjLimpo);

    if (existente && existente.id !== barbearia.id) {
        erros.push({
            variavel: "CNPJ",
            motivo: `Já existe uma barbearia cadastrada com o CNPJ: ${barbearia.cnpj}`,
            valor: barbearia.cnpj
        });
    }

    return erros;
};
