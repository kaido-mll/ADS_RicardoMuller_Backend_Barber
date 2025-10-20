import { getCustomRepository } from "typeorm";
import { Leitura } from "../Entities/Leitura";
import { LeituraRepository } from "../Repository/Leitura.Repository";

export class LeituraService {

    // Criar registro
    static async create(params: Leitura) {
        const repository = getCustomRepository(LeituraRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<Leitura>) {
        const repository = getCustomRepository(LeituraRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(Leitura)
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
        const repository = getCustomRepository(LeituraRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_ENTIDADE
    static async getByIdEntidade(id_entidade: number) {
        const repository = getCustomRepository(LeituraRepository);
        try {
            return await repository.find({ where: { id_entidade } });
        } catch (error) {
            throw error;
        }
    }


    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(LeituraRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(Leitura)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}
