import { EntityRepository, Repository } from "typeorm";
import { Conta } from "../Entities/Conta";

@EntityRepository(Conta)
export class ContaRepository extends Repository<Conta> {}