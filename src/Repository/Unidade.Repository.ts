import { EntityRepository, Repository } from "typeorm";
import { Unidade } from "../Entities/Unidade";

@EntityRepository(Unidade)
export class UnidadeRepository extends Repository<Unidade> {}