import { getCustomRepository } from "typeorm";
import { Vencimento } from "../Entities/Vencimento";
import { VencimentoRepository } from "../Repository/Vencimento.Repository";

export class VencimentoService {

    // Criar registro
    static async create(params: Vencimento) {
        const repository = getCustomRepository(VencimentoRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<Vencimento>) {
        const repository = getCustomRepository(VencimentoRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(Vencimento)
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
        const repository = getCustomRepository(VencimentoRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_ENTIDADE
    static async getByIdEntidade(id_entidade: number) {
        const repository = getCustomRepository(VencimentoRepository);
        try {
            return await repository.find({ where: { id_entidade } });
        } catch (error) {
            throw error;
        }
    }


    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(VencimentoRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(Vencimento)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}