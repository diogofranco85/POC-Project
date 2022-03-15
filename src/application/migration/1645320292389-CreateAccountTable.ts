import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAccountTable1645320292389 implements MigrationInterface {

    tableName: string = 'accounts';

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
                        name: "client_id",
                        type: 'smallint',
                        isNullable: false,

                    },
                    {
                        name: "moviment",
                        type: 'char',
                        width: 1,
                        isNullable: false
                    },
                    {
                        name: "value",
                        type: 'float',
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: 'timestamp',
                        isNullable: false
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(this.tableName,
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedTableName: 'clients',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
