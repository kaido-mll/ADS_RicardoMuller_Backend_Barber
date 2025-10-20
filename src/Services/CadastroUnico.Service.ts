import { getCustomRepository } from "typeorm";
import { CadastroUnico } from "../Entities/CadastroUnico";
import { CadastroUnicoRepository } from "../Repository/CadastroUnico.Repository";

export class CadastroUnicoService {
    // Criar registro
    static async create(params: CadastroUnico) {
        const repository = getCustomRepository(CadastroUnicoRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<CadastroUnico>) { // Aceita id e params
    const repository = getCustomRepository(CadastroUnicoRepository);
    try {
        const operation = await repository
            .createQueryBuilder()
            .update(CadastroUnico)
            .set(params)
            .where("id = :id", { id: id }) // Usa o id recebido
            .execute();

        return operation;
    } catch (error) {
        throw error;
    }
}

    // Buscar por ID
    static async getById(id: number) {
        const repository = getCustomRepository(CadastroUnicoRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar todos
    static async getAll() {
        const repository = getCustomRepository(CadastroUnicoRepository);
        try {
            return await repository.find();
        } catch (error) {
            throw error;
        }
    }

      static async getByIdEntidade(id_entidade:number) {
        const repository = getCustomRepository(CadastroUnicoRepository);
        try {
            return await repository.find({where:{id_entidade}});
        } catch (error) {
            throw error;
        }
    }

    static async getByIdEntidadeECodigoUnico(id_entidade:number,codigo_unico:number) {
        const repository = getCustomRepository(CadastroUnicoRepository);
        try {
            return await repository.findOne({where:{id_entidade,codigo_unico}});
        } catch (error) {
            throw error;
        }
    }

    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(CadastroUnicoRepository);
        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(CadastroUnico)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}
