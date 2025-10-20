import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class USUARIO1760987740040 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "USUARIO",
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
                        type: "VARHCAR(50)",
                        isNullable: false,
                    },
                    {
                        name: "CPF",
                        type: "VARCHAR(11)",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "EMAIL",
                        type: "VARCHAR(200)",
                        isNullable: true,
                    },
                    {
                        name: "CELULAR",
                        type: "VARCHAR(11)",
                        isNullable: true,
                    },
                    {
                        name: "FOTO",
                        type: "VARCHAR(250)",
                        isNullable: true,
                    },
                    {
                        name: "ADMINISTRADOR",
                        type: "BOOLEAN",
                        isNullable: true,
                        default: false,
                    },
                    {
                        name: "SENHA",
                        type: "VARCHAR(30)",
                        isNullable: false,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
