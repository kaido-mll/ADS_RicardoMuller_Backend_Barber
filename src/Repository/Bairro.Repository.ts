import { EntityRepository, Repository } from "typeorm";
import { Bairro } from "../Entities/Bairro";

@EntityRepository(Bairro)
export class BairroRepository extends Repository<Bairro> {}