import { getCustomRepository } from "typeorm";
import { Unidade } from "../Entities/Unidade";
import { UnidadeRepository } from "../Repository/Unidade.Repository";

export class UnidadeService {

    // Criar registro
    static async create(params: Unidade) {
        const repository = getCustomRepository(UnidadeRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<Unidade>) {
        const repository = getCustomRepository(UnidadeRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(Unidade)
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
        const repository = getCustomRepository(UnidadeRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_ENTIDADE
    static async getByIdEntidade(id_entidade: number) {
        const repository = getCustomRepository(UnidadeRepository);
        try {
            return await repository.find({ where: { id_entidade } });
        } catch (error) {
            throw error;
        }
    }

    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(UnidadeRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(Unidade)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}
