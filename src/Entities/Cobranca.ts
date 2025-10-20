import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "COBRANCA" })
export class Cobranca {
    @PrimaryGeneratedColumn()
    ID!: number;

    @Column({ type: "varchar", length: 10, name: "PERIODO" })
    periodo!: string;

    @Column({ type: "decimal", precision: 18, scale: 2, name: "TAXA_DECIMAL" })
    taxaDecimal!: number;

    @Column({ type: "varchar", length: 11, name: "CPF_INFORMANTE" })
    cpfInformante!: string;

    @Column({ type: "datetime", name: "data_informacao", default: () => "CURRENT_TIMESTAMP" })
    dataInformacao!: Date;

    @Column({ type: "int", name: "CHAVE_DESKTOP", nullable: true })
    chaveDesktop?: number;

    @Column({ type: "int", name: "CHAVE_WEB" })
    chaveWeb!: number;

    @Column({ type: "int", name: "TIPO", default: 0 })
    tipo!: number;

    @Column({ type: "int", name: "CODIGO_UNICO_FORNECEDOR" })
    codigoUnicoFornecedor!: number;

    @Column({ type: "varchar", length: 5, name: "COMPUTADA", default: 'N' })
    computada!: string;

    @Column({ type: "varchar", length: 5, name: "CANCELADA", default: 'N' })
    cancelada!: string;

    @Column({ type: "date", name: "VENCIMENTO" })
    vencimento!: Date;

    @Column({ type: "varchar", length: 44, name: "CODBARRA" })
    codbarra!: string;

    @Column({ type: "int", name: "REGISTRO", nullable: true })
    registro?: number;

    @Column({ type: "date", name: "DATA_BAIXA", nullable: true })
    dataBaixa?: Date;

    @Column({ type: "varchar", name: "500", nullable: true })
    descricao?: string;

    @Column({ type: "int", name: "ID_ENTIDADE" })
    idEntidade!: number;
}