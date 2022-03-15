import * as express from "express";
import { resolve } from "path";
import { readFileSync } from 'fs';
import helmet from "helmet";
import * as cors from 'cors';
import * as SwaggerUi from 'swagger-ui-express';
import { createConnection } from 'typeorm'
import { InversifyExpressServer } from 'inversify-express-utils';

import container from "./application/config/container/dependency";
class Server {
    public readonly app: InversifyExpressServer
    private expressInstance: express.Application;

    constructor() {
        this.app = new InversifyExpressServer(container);
    }

    public start() {

        this.app.setConfig(app => {
            this.connectDatabase();
            this.middleware(app);
            this.routes(app);
            this.documentation(app);
            this.expressInstance = app;
        })

        const app = this.app.build();
        const port = process.env.PORT || 3333;
        app.listen(port, () => {
            console.log(`🚀️ Service is running on port ${port}`);
        })
    }

    get(): express.Application {
        return this.expressInstance;
    }

    private middleware(app: express.Application) {
        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors());
    }

    private routes(app: express.Application) {
        app.get('/health', (request, response) => response.json({ health: true }))
    }

    private connectDatabase(): void {
        createConnection();
    }

    private documentation(app: express.Application): void {
        const swaggerFile: string = resolve('src', 'application', 'documentation', 'swagger.json');
        const swaggerData = readFileSync(swaggerFile, 'utf-8');
        app.use('/doc', SwaggerUi.serve, SwaggerUi.setup(JSON.parse(swaggerData)));
    }

}

export default new Server();