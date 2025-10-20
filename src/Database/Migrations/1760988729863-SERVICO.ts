import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class SERVICO1760988729863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table ({
                name: "SERVICO",
                columns: [
                    {
                        name: "ID",
                        type: "INT",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "DESCRICAO",
                        type: "VARCHAR(200)",
                        isNullable: false,
                    },
                    {
                        name: "VALOR",
                        type: "DECIMAL",
                        precision: 3,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "DURACAO",
                        type: "INT",
                        isNullable: false,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
