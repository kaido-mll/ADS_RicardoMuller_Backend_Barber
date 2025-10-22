import { getCustomRepository } from "typeorm";
import { Barbearia } from "../Entities/Barbearia";
import { BarbeariaRepository } from "../Repository/Barbearia.Repository";

export class BarbeariaService {

    static async create(params: Barbearia) {
        const repository = getCustomRepository(BarbeariaRepository);
        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async update(id: number, params: Partial<Barbearia>) {
        const repository = getCustomRepository(BarbeariaRepository);
        try {
            return await repository
                .createQueryBuilder()
                .update(Barbearia)
                .set(params)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id: number) {
        const repository = getCustomRepository(BarbeariaRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    static async delete(id: number) {
        const repository = getCustomRepository(BarbeariaRepository);
        try {
            return await repository
                .createQueryBuilder()
                .delete()
                .from(Barbearia)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    static async getByCnpj(cnpj: string) {
        const repository = getCustomRepository(BarbeariaRepository);
        try {
            const cnpjLimpo = cnpj.replace(/\D/g, '');
            return await repository.findOne({ where: { cnpj: cnpjLimpo } });
        } catch (error) {
            throw error;
        }
    }

}
