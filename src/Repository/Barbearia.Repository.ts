import { EntityRepository, Repository } from "typeorm";
import { Barbearia } from "../Entities/Barbearia";

@EntityRepository(Barbearia)
export class BarbeariaRepository extends Repository<Barbearia> {}
