import { getCustomRepository } from "typeorm";
import { Formula } from "../Entities/Formula";
import { FormulaRepository } from "../Repository/Formula.Repository";

export class FormulaService {

    // Criar registro
    static async create(params: Formula) {
        const repository = getCustomRepository(FormulaRepository);

        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Atualizar registro
    static async update(id: number, params: Partial<Formula>) {
        const repository = getCustomRepository(FormulaRepository);

        try {
            const operation = await repository
                .createQueryBuilder()
                .update(Formula)
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
        const repository = getCustomRepository(FormulaRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_ENTIDADE
    static async getByIdEntidade(id_entidade: number) {
        const repository = getCustomRepository(FormulaRepository);
        try {
            return await repository.find({ where: { id_entidade }, order:{data_criacao:"DESC"} });
        } catch (error) {
            throw error;
        }
    }

    // Buscar por ID_USUARIO
    static async getByIdUsuario(id_usuario: number) {
        const repository = getCustomRepository(FormulaRepository);
        try {
            return await repository.find({ where: { id_usuario } });
        } catch (error) {
            throw error;
        }
    }

    // Deletar por ID
    static async delete(id: number) {
        const repository = getCustomRepository(FormulaRepository);

        try {
            const del = await repository
                .createQueryBuilder()
                .delete()
                .from(Formula)
                .where("id = :id", { id })
                .execute();

            return del;
        } catch (error) {
            throw error;
        }
    }
}
