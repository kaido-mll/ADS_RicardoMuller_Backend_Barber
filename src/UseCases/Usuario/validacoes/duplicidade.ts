import { ErroMotivo } from "../../../Models/ErroMotivo";
import { Usuario } from "../../../Entities/Usuario";
import { UsuarioService } from "../../../Services/Usuario.Service";

export const duplicidade = async (usuario: Usuario) => {
    const erros = [] as ErroMotivo[];

    // Verificação de duplicidade
    const existingUsuario = await UsuarioService.getCpf(usuario.cpf);
    if (existingUsuario) {
        erros.push({
            variavel: "CPF",
            motivo: `Já existe um usuario de cpf: ${usuario.cpf} cadastrado `,
            valor: usuario.cpf
        });
    }

    return erros;
}