import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "vencimento" })
export class Vencimento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int", name: "id_usuario", nullable: false })
    id_usuario!: string;

    @Column({ type: "datetime", name: "data_criacao", default: () => "CURRENT_TIMESTAMP", nullable: true })
    data_criacao!: Date;

    @Column({ type: "int", name: "id_entidade", nullable: false })
    id_entidade!: number;
}
