import { EntityRepository, Repository } from "typeorm";
import { Barbeiro } from "../Entities/Barbeiro";

@EntityRepository(Barbeiro)
export class BarbeiroRepository extends Repository<Barbeiro> {}
