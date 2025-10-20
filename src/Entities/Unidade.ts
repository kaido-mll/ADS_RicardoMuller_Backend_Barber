import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "unidade" })
export class Unidade {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 150 })
    nome!: string;

    @Column({ type: "int", name: "id_entidade" })
    id_entidade!: number;
}
