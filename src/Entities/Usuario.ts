import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "USUARIO" })
export class Usuario {
    @PrimaryGeneratedColumn()
    ID!: number;

    @Column({ type: "varchar", length: 50 })
    NOME!: string;

    @Column({ type: "varchar", length: 11 })
    CPF!: string;

    @Column({ type: "varchar", length: 200 })
    EMAIL!: string;

    @Column({ type: "varchar", length: 11 })
    CELULAR!: string;

    @Column({ type: "varchar", length: 250 })
    FOTO!: string;

    @Column({ type: "boolean", name: "ADMINISTRADOR" })
    ADMINISTRADOR!: string;

    @Column({ type: "varchar", length: 30 })
    SENHA!: string;
}
