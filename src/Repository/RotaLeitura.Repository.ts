import { EntityRepository, Repository } from "typeorm";
import { RotaLeitura } from "../Entities/RotaLeitura";

@EntityRepository(RotaLeitura)
export class RotaLeituraRepository extends Repository<RotaLeitura> {}