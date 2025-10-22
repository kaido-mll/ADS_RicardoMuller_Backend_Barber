import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "USUARIO" })
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50 })
    nome!: string;

    @Column({ type: "varchar", length: 11 })
    cpf!: string;

    @Column({ type: "varchar", length: 200 })
    email!: string;

    @Column({ type: "varchar", length: 11 })
    celular!: string;

    @Column({ type: "varchar", length: 250 })
    foto!: string;

    @Column({ type: "boolean", name: "ADMINISTRADOR" })
    administrador!: string;

    @Column({ type: "varchar", length: 30 })
    senha!: string;
}
