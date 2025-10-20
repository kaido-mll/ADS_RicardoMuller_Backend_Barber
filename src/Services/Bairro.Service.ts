import { getCustomRepository } from "typeorm";
import { Bairro } from "../Entities/Bairro";
import { BairroRepository } from "../Repository/Bairro.Repository";

export class BairroService {

    // Criar registro
    static async create(params: Bairro) {
        const repository = getCustomRepository(BairroRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<Bairro>) {
        const repository = getCustomRepository(BairroRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(Bairro)
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
        const repository = getCustomRepository(BairroRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_ENTIDADE
    static async getByIdEntidade(id_entidade: number) {
        const repository = getCustomRepository(BairroRepository);
        try {
            return await repository.find({ where: { id_entidade } });
        } catch (error) {
            throw error;
        }
    }


    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(BairroRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(Bairro)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}
