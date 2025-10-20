import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "bairro" })
export class Bairro {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 150 })
    nome!: string;

    @Column({ type: "int", name: "id_entidade" })
    id_entidade!: number;
}
