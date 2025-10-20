import { CadastroUnico } from "../../Entities/CadastroUnico";
import { ResponseFormat } from "../../Models/ResponseFormat";
import { CadastroUnicoService } from "../../Services/CadastroUnico.Service";
import { validarCPF } from "./Utils/validar_cpf";

// Criar
export async function create(params: CadastroUnico) {
    try {

        //VALIDAR CPF SE TIVER - VALIDAR CNPJ SE TIVER
        if (params.cpf) {
            const cpf_valido = validarCPF(params.cpf);
            if (!cpf_valido) {
                return new ResponseFormat(false, `Cpf: ${params.cpf} inválido!`, params);

            }
        }

        //SE FOR CPF DEIXAR CNPJ NULL
        if(params.cpf){
            params.cnpj = undefined;
            
        }
        //SE FOR CNPJ DEIXAR CPF NULL
        else if(params.cnpj){
            params.cpf = undefined;
        }

        //NAO PODE EXISTIR CADASTRO_UNICO + ID_ENTIDADE IGUAL
        const exite_cadastro_unico = await CadastroUnicoService.getByIdEntidadeECodigoUnico(params.id_entidade,params.codigo_unico);
        if(exite_cadastro_unico)  return new ResponseFormat(false, `Já existe o cadastro unico deste usuario na base de dados`, exite_cadastro_unico);


        const data = await CadastroUnicoService.create(params);
        return new ResponseFormat(true, `Cadastro Único criado com sucesso!`, data);
    } catch (error) {
        throw error;
    }
}








