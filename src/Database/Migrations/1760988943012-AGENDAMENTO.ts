import { MigrationInterface, QueryRunner, Table, TableForeignKey, Transaction } from "typeorm";

export class AGENDAMENTO1760988943012 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "AGENDAMENTO",
                columns: [
                    {
                        name: "ID",
                        type: "INT",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "ID_BARBEARIA",
                        type: "INT",
                        isNullable: false,
                    },
                    {
                        name: "ID_USUARIO",
                        type: "INT",
                        isNullable: false,
                    },
                    {
                        name: "ID_BARBEIRO",
                        type: "INT",
                        isNullable: false,
                    },
                    {
                        name: "ID_SERVICO",
                        type: "INT",
                        isNullable: false,
                    },
                    {
                        name: "CLIENTE",
                        type: "VARCHAR(100)",
                        isNullable: false,
                    },
                    {
                        name: "BARBEIRO",
                        type: "VARCHAR(100)",
                        isNullable: false,
                    },
                    {
                        name: "BARBEARIA",
                        type: "VARCHAR(100)",
                        isNullable: false,
                    },
                    {
                        name: "SERVICO",
                        type: "VARCHAR(200)",
                        isNullable: false,
                    },
                    {
                        name: "DATA",
                        type: "DATE",
                        isNullable: false,
                    },
                    {
                        name: "HORA",
                        type: "TIME",
                        isNullable: false,
                    },
                    {
                        name: "DURACAO_MIN",
                        type: "INT",
                        isNullable: false,
                    },
                    {
                        name: "VALOR",
                        type: "DECIMAL",
                        precision: 5,
                        scale: 2,
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    new TableForeignKey({
                        name: "FK_BARBEARIA_AGENDAMENTO",
                        columnNames: ["ID_BARBEARIA"],
                        referencedTableName: "BARBEARIA",
                        referencedColumnNames: ["ID"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    }),
                    new TableForeignKey({
                        name: "FK_USUARIO_AGENDAMENTO",
                        columnNames: ["ID_USUARIO"],
                        referencedTableName: "USUARIO",
                        referencedColumnNames: ["ID"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    }),
                    new TableForeignKey({
                        name: "FK_BARBEIRO_AGENDAMENTO",
                        columnNames: ["ID_BARBEIRO"],
                        referencedTableName: "BARBEIRO",
                        referencedColumnNames: ["ID"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    }),
                    new TableForeignKey({
                        name: "FK_SERVICO_AGENDAMENTO",
                        columnNames: ["ID_SERVICO"],
                        referencedTableName: "SERVICO",
                        referencedColumnNames: ["ID"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    })
                ]
                

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
