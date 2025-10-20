import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "CONTA" })
export class Conta {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int", name: "ID_CADASTRO_UNICO" })
    id_cadastro_unico!: number;

    @Column({ type: "varchar", length: 50, name: "TIPO_CONSUMIDOR", nullable: true })
    tipo_consumidor?: string;

    @Column({ type: "datetime", name: "DATA_CRIACAO" })
    data_criacao!: Date;

    @Column({ type: "datetime", name: "DATA_BAIXA", nullable: true })
    data_baixa?: Date;

    @Column({ type: "varchar", length: 500, name: "MOTIVO_SUSPENSAO", nullable: true })
    motivo_suspensao?: string;

    @Column({ type: "varchar", length: 50, name: "TIPO_LIGACAO" })
    tipo_ligacao!: string;

    @Column({ type: "varchar", length: 50, name: "SITUACAO" })
    situacao!: string;

    @Column({ type: "int", name: "CONTA_ORIGINAL", nullable: true })
    conta_original?: number;

    @Column({ type: "varchar", length: 500, name: "ORIGEM", nullable: true })
    origem?: string;

    @Column({ type: "varchar", length: 50, name: "EMAIL", nullable: true })
    email?: string;

    @Column({ type: "varchar", length: 50, name: "CELULAR", nullable: true })
    celular?: string;

    @Column({ type: "varchar", length: 50, name: "NUMERO_RELOGIO", nullable: true })
    numero_relogio?: string;

    @Column({ type: "int", name: "LEITURA_ATUAL" })
    leitura_atual!: number;

    @Column({ type: "int", name: "PRIMEIRA_LEITURA" })
    primeira_leitura!: number;

    @Column({ type: "int", name: "ID_BAIRRO", nullable: true })
    id_bairro?: number;

    @Column({ type: "int", name: "ID_UNIDADE", nullable: true })
    id_unidade?: number;

    @Column({ type: "int", name: "ID_RUA", nullable: true })
    id_rua?: number;

    @Column({ type: "varchar", length: 20, name: "CEP" })
    cep!: string;

    @Column({ type: "int", name: "NUMERO", nullable: true })
    numero?: number;

    @Column({ type: "varchar", length: 150, name: "COMPLEMENTO", nullable: true })
    complemento?: string;

    @Column({ type: "varchar", length: 50, name: "QUADRA", nullable: true })
    quadra?: string;

    @Column({ type: "varchar", length: 50, name: "LOTE", nullable: true })
    lote?: string;

    @Column({ type: "int", name: "ID_ROTA_LEITURA" })
    id_rota_leitura!: number;

    @Column({ type: "int", name: "ORDEM_LEITURA" })
    ordem_leitura!: number;

    @Column({ type: "int", name: "CONTA_GRUPO" })
    conta_grupo!: number;

    @Column({ type: "int", name: "ID_ENTIDADE" })
    id_entidade!: number;
}
