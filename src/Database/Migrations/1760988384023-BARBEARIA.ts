import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class BARBEARIA1760988384023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "BARBEARIA",
                columns: [
                    {
                        name: "ID",
                        type: "INT",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "NOME",
                        type: "VARCHAR(50)",
                        isNullable: false,
                    },
                    {
                        name: "BAIRRO",
                        type: "VARCHAR(50)",
                        isNullable: false,
                    },
                    {
                        name: "RUA",
                        type: "VARCHAR(100)",
                        isNullable: false,
                    },
                    {
                        name: "CNPJ",
                        type: "VARCHAR(14)",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "LOGO",
                        type: "VARCHAR(250)",
                        isNullable: true,
                    },
                    {
                        name: "ID_ADMINISTRADOR",
                        type: "INT",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    new TableForeignKey ({
                        name: "FK_BARBEARIA_ADM",
                        columnNames: ["ID_ADMINISTRADOR"],
                        referencedTableName: "USUARIO",
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
