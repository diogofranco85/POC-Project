import { connect } from 'http2';
import { Connection, createConnection, getConnection } from 'typeorm';

const mockConnection = {
    async create() {
        const entities = '../src/domain/infra/entity/**/*.ts';
        const migrations = '../src/application/migration/**/*.ts';

        return await createConnection({
            name: "test",
            type: "sqlite",
            database: ":memory",
            synchronize: true,
            logging: false,
            entities: [entities],
            migrations: [migrations],
            cli: {
                "entitiesDir": "../src/domain/infra/entity",
                "migrationsDir": "../src/application/migration"
            }
        })
    },

    get: () => {
        return getConnection('test');
    },

    async close() {
        await getConnection('test').close();
    },

    async clear() {
        const connection = getConnection('test');
        const entities = connection.entityMetadatas;

        await Promise.all(entities.map(async (entity) => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName} WHERE id > 0`);
        }))
    }
}

export default mockConnection;