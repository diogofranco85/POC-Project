import express, { Express } from "express";
import helmet from "helmet";
import cors from 'cors';
import routes from './application/config/routes';

class Server {
    private readonly app: Express

    constructor() {
        this.app = express();
        this.app.set('port', process.env.PORT || 3000);
        this.middleware();
        this.routes();
    }

    public start() {
        const port: number = this.getApp.get('port')
        this.app.listen(port, () => {
            console.log(`🚀️ Service is running on port ${port}`);
        })
    }

    get getApp(): Express {
        return this.app;
    }

    private middleware() {
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    private routes() {
        this.app.use(routes);
    }

    private connectDatabase() {
        return ''
    }

}

export default new Server();