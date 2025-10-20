import { EntityRepository, Repository } from "typeorm";
import { Rua } from "../Entities/Rua";

@EntityRepository(Rua)
export class RuaRepository extends Repository<Rua> {}