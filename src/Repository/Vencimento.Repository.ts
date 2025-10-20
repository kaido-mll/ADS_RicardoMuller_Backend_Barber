import { EntityRepository, Repository } from "typeorm";
import { Vencimento } from "../Entities/Vencimento";

@EntityRepository(Vencimento)
export class VencimentoRepository extends Repository<Vencimento> {}