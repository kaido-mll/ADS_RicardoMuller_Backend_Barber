import { EntityRepository, Repository } from "typeorm";
import { Cobranca } from "../Entities/Cobranca";

@EntityRepository(Cobranca)
export class CobrancaRepository extends Repository<Cobranca> {}