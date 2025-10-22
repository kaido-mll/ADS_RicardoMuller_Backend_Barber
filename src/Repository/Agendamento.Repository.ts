import { EntityRepository, Repository } from "typeorm";
import { Agendamento } from "../Entities/Agendamento";

@EntityRepository(Agendamento)
export class AgendamentoRepository extends Repository<Agendamento> {}
