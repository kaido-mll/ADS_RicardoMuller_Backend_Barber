import { getCustomRepository } from "typeorm";
import { Usuario } from "../Entities/Usuario";
import { UsuarioRepository } from "../Repository/Usuario.Repository";

export class UsuarioService {

    // Criar registro
    static async create(params: Usuario) {
        const repository = getCustomRepository(UsuarioRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<Usuario>) {
        const repository = getCustomRepository(UsuarioRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(Usuario)
                .set(params)
                .where("id = :id", { id })
                .execute();

            return operation;
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID
    static async getById(id: number) {
        const repository = getCustomRepository(UsuarioRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por nome e cpf
    static async getCpf(cpf: string) {
        const repository = getCustomRepository(UsuarioRepository);
        try {
            return await repository.findOne({ where: { cpf } });
        } catch (error) {
            throw error;
        }
    }

    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(UsuarioRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(Usuario)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}
