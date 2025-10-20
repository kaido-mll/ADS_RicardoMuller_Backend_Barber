import { EntityRepository, Repository } from "typeorm";
import { Usuario } from "../Entities/Usuario";

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {}