import { getCustomRepository } from "typeorm";
import { Rua } from "../Entities/Rua";
import { RuaRepository } from "../Repository/Rua.Repository";

export class RuaService {

    // Criar registro
    static async create(params: Rua) {
        const repository = getCustomRepository(RuaRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<Rua>) {
        const repository = getCustomRepository(RuaRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(Rua)
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
        const repository = getCustomRepository(RuaRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_ENTIDADE
    static async getByIdEntidade(id_entidade: number) {
        const repository = getCustomRepository(RuaRepository);
        try {
            return await repository.find({ where: { id_entidade } });
        } catch (error) {
            throw error;
        }
    }


    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(RuaRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(Rua)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}