import { ErroMotivo } from "../../../Models/ErroMotivo";
import { Usuario } from "../../../Entities/Usuario";
import { UsuarioService } from "../../../Services/Usuario.Service";

export const duplicidade = async (usuario: Usuario) => {
    const erros = [] as ErroMotivo[];

    // Verificação de duplicidade
    const existingUsuario = await UsuarioService.getCpfNome(usuario.CPF, usuario.NOME);
    if (existingUsuario) {
        erros.push({
            variavel: "CPF",
            motivo: `Já existe um usuario de nome: ${usuario.NOME} cadastrada com o CPF: ${usuario.CPF} `,
            valor: usuario.CPF
        });
    }

    return erros;
}