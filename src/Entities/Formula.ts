import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "formula" })
export class Formula {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50, name: "modo_calculo", nullable: false })
    modo_calculo!: string;

    @Column({ type: "text", name: "faixas", nullable: false })
    faixas!: string;

    @Column({ type: "datetime", name: "data_criacao", default: () => "CURRENT_TIMESTAMP", nullable: true })
    data_criacao!: Date;

    @Column({ type: "int", name: "id_usuario", nullable: false })
    id_usuario!: number;

    @Column({ type: "int", name: "id_entidade", nullable: false })
    id_entidade!: number;

}
