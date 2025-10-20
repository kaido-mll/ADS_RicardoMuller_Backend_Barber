import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Bairro } from "./Bairro";

@Entity({ name: "rua" })
export class Rua {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 150 })
    nome!: string;

    @Column({ type: "int", name: "ID_ENTIDADE" })
    id_entidade!: number;

    @ManyToOne(() => Bairro, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
    @JoinColumn({ name: "ID_BAIRRO" })
    bairro!: Bairro;
}
