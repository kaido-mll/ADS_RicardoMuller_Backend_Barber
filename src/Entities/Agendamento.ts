import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "AGENDAMENTO" })
export class Agendamento {

    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column({ name: "ID_BARBEARIA", type: "int", nullable: false })
    id_barbearia: number;

    @Column({ name: "ID_USUARIO", type: "int", nullable: false })
    id_usuario: number;

    @Column({ name: "ID_BARBEIRO", type: "int", nullable: false })
    id_barbeiro: number;

    @Column({ name: "ID_SERVICO", type: "int", nullable: false })
    id_servico: number;

    @Column({ name: "CLIENTE", type: "varchar", length: 100, nullable: false })
    cliente: string;

    @Column({ name: "BARBEIRO", type: "varchar", length: 100, nullable: false })
    barbeiro: string;

    @Column({ name: "BARBEARIA", type: "varchar", length: 100, nullable: false })
    barbearia: string;

    @Column({ name: "SERVICO", type: "varchar", length: 200, nullable: false })
    servico: string;

    @Column({ type: "date" })
    data: string;

    @Column({ type: "time" })
    hora: string; 

    @Column({ name: "DURACAO_MIN", type: "int", nullable: false })
    duracao_min: number;

    @Column({ name: "VALOR", type: "decimal", precision: 5, scale: 2, nullable: false })
    valor: number;
}
