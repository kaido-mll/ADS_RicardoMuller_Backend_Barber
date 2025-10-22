import { getCustomRepository } from "typeorm";
import { Servico } from "../Entities/Servico";
import { ServicoRepository } from "../Repository/Servico.Repository";

export class ServicoService {

    static async create(params: Servico) {
        const repository = getCustomRepository(ServicoRepository);
        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async update(id: number, params: Partial<Servico>) {
        const repository = getCustomRepository(ServicoRepository);
        try {
            return await repository
                .createQueryBuilder()
                .update(Servico)
                .set(params)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id: number) {
        const repository = getCustomRepository(ServicoRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    static async delete(id: number) {
        const repository = getCustomRepository(ServicoRepository);
        try {
            return await repository
                .createQueryBuilder()
                .delete()
                .from(Servico)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }
}
