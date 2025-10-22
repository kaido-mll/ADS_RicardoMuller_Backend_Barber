import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "BARBEARIA" })
export class Barbearia {
    
    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column({ name: "NOME", type: "varchar", length: 50, nullable: false })
    nome: string;

    @Column({ name: "BAIRRO", type: "varchar", length: 50, nullable: false })
    bairro: string;

    @Column({ name: "RUA", type: "varchar", length: 100, nullable: false })
    rua: string;

    @Column({ name: "CNPJ", type: "varchar", length: 14, nullable: false, unique: true })
    cnpj: string;

    @Column({ name: "LOGO", type: "varchar", length: 250, nullable: true })
    logo: string;

    @Column({ name: "ID_ADMINISTRADOR", type: "int", nullable: false })
    id_administrador: number;
}
