import { EntityRepository, Repository } from "typeorm";
import { Servico } from "../Entities/Servico";

@EntityRepository(Servico)
export class ServicoRepository extends Repository<Servico> {}
