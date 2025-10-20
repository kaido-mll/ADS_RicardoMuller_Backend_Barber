import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("CADASTRO_UNICO")
export class CadastroUnico {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    codigo_unico: number;

    @Column({ type: "varchar", length: 250 })
    descricao: string;

    @Column({ type: "varchar", length: 11, nullable: true })
    cpf?: string;

    @Column({ type: "varchar", length: 14, nullable: true })
    cnpj?: string;

    @Column({ type: "int" })
    id_entidade: number;
}
