import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "BARBEIRO" })
export class Barbeiro {

    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column({ name: "NOME", type: "varchar", length: 50, nullable: false })
    nome: string;

    @Column({ name: "CPF", type: "varchar", length: 11, nullable: false, unique: true })
    cpf: string;

    @Column({ name: "EMAIL", type: "varchar", length: 200, nullable: true })
    email: string;

    @Column({ name: "CELULAR", type: "varchar", length: 11, nullable: true })
    celular: string;

    @Column({ name: "FOTO", type: "varchar", length: 250, nullable: true })
    foto: string;
}
