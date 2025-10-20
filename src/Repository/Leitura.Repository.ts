import { EntityRepository, Repository } from "typeorm";
import { Leitura } from "../Entities/Leitura";

@EntityRepository(Leitura)
export class LeituraRepository extends Repository<Leitura> {}