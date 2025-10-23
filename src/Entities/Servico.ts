import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "SERVICO" })
export class Servico {

    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column({ name: "DESCRICAO", type: "varchar", length: 200, nullable: false })
    descricao: string;

    @Column({ name: "VALOR", type: "decimal", precision: 5, scale: 2, nullable: false })
    valor: number;

    @Column({ name: "DURACAO", type: "int", nullable: false })
    duracao: number;
}
