import { getCustomRepository } from "typeorm";
import { Barbeiro } from "../Entities/Barbeiro";
import { BarbeiroRepository } from "../Repository/Barbeiro.Repository";

export class BarbeiroService {

    static async create(params: Barbeiro) {
        const repository = getCustomRepository(BarbeiroRepository);
        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async update(id: number, params: Partial<Barbeiro>) {
        const repository = getCustomRepository(BarbeiroRepository);
        try {
            return await repository
                .createQueryBuilder()
                .update(Barbeiro)
                .set(params)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id: number) {
        const repository = getCustomRepository(BarbeiroRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    static async getCpf( cpf: string) {
        const repository = getCustomRepository(BarbeiroRepository);
        try {
            return await repository.findOne({ where: {  cpf } });
        } catch (error) {
            throw error;
        }
    }

    static async delete(id: number) {
        const repository = getCustomRepository(BarbeiroRepository);
        try {
            return await repository
                .createQueryBuilder()
                .delete()
                .from(Barbeiro)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }
}
