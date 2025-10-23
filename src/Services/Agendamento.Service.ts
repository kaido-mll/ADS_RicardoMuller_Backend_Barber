import { getCustomRepository, getRepository } from "typeorm";
import { Agendamento } from "../Entities/Agendamento";
import { AgendamentoRepository } from "../Repository/Agendamento.Repository";

export class AgendamentoService {

    static async create(params: Agendamento) {
        const repository = getCustomRepository(AgendamentoRepository);
        try {
            const data = repository.create(params);
            await repository.save(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async update(id: number, params: Partial<Agendamento>) {
        const repository = getCustomRepository(AgendamentoRepository);
        try {
            return await repository
                .createQueryBuilder()
                .update(Agendamento)
                .set(params)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id: number) {
        const repository = getCustomRepository(AgendamentoRepository);
        try {
            return await repository.findOne({ where: { id } });
        } catch (error) {
            throw error;
        }
    }

    static async delete(id: number) {
        const repository = getCustomRepository(AgendamentoRepository);
        try {
            return await repository
                .createQueryBuilder()
                .delete()
                .from(Agendamento)
                .where("id = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    // Busca por barbeiro + cliente + data + hora
    static async getByHorario(
        id_barbeiro: number,
        id_cliente: number,
        data: string,
        hora: string
    ) {
        const repository = getRepository(Agendamento);

        return await repository.findOne({
            where: {
                id_barbeiro: id_barbeiro,
                id_usuario: id_cliente,
                data: data,
                hora: hora,
            },
        });
    }

}
