import { getCustomRepository } from "typeorm";
import { RotaLeitura } from "../Entities/RotaLeitura";
import { RotaLeituraRepository } from "../Repository/RotaLeitura.Repository";

export class RotaLeituraService {

    // Criar registro
    static async create(params: RotaLeitura) {
        const repository = getCustomRepository(RotaLeituraRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<RotaLeitura>) {
        const repository = getCustomRepository(RotaLeituraRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(RotaLeitura)
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
        const repository = getCustomRepository(RotaLeituraRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_ENTIDADE
    static async getByIdEntidade(id_entidade: number) {
        const repository = getCustomRepository(RotaLeituraRepository);
        try {
            // Retorna todas as rotas para uma entidade
            return await repository.find({ where: { id_entidade } });
        } catch (error) {
            throw error;
        }
    }
    
    // Buscar por Nome e ID_ENTIDADE (para validação)
    static async getByNomeAndIdEntidade(nome: string, id_entidade: number) {
        const repository = getCustomRepository(RotaLeituraRepository);
        try {
            // Retorna a primeira rota encontrada com o mesmo nome para a entidade
            return await repository.findOne({ where: { nome, id_entidade } });
        } catch (error) {
            throw error;
        }
    }

    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(RotaLeituraRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(RotaLeitura)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}
