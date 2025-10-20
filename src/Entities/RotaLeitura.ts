import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "rota_leitura" })
export class RotaLeitura {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 150 })
    nome!: string;

    @Column({ type: "int", name: "id_entidade" })
    id_entidade!: number;
}