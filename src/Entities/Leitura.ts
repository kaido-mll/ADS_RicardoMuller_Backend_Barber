import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "leitura" })
export class Leitura {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int", name: "id_conta" })
    id_conta!: number;

    @Column({ type: "int", name: "id_usuario" })
    id_usuario!: number;

    @Column({ type: "int", name: "leitura_anterior" })
    leitura_anterior!: number;

    @Column({ type: "int", name: "leitura_atual" })
    leitura_atual!: number;

    @Column({ type: "datetime", name: "data_criacao" })
    data_criacao!: Date;

    @Column({ type: "int", name: "id_entidade" })
    id_entidade!: number;
    
}
