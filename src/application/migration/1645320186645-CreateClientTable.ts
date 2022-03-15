import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientTable1645320686645 implements MigrationInterface {

    tableName: string = 'clients';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: "id",
                        type: 'smallint',
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: 'varchar',
                        width: 50,
                        isNullable: false
                    },
                    {
                        name: "document",
                        type: 'varchar',
                        width: 11,
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "created_at",
                        type: 'timestamp',
                        default: "now()",
                        isNullable: false
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
