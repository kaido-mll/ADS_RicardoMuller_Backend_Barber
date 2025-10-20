import { EntityRepository, Repository } from "typeorm";
import { Formula } from "../Entities/Formula";

@EntityRepository(Formula)
export class FormulaRepository extends Repository<Formula> {}