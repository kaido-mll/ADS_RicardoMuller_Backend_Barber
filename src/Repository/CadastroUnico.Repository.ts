import { EntityRepository, Repository } from "typeorm";
import { CadastroUnico } from "../Entities/CadastroUnico";

@EntityRepository(CadastroUnico)
export class CadastroUnicoRepository extends Repository<CadastroUnico> {}