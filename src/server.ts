import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';
import getConnectionMongo from './database/connection';

class Server {

    private app: Express;

    constructor() {
        this.app = express();
        this.bootstrap();
        this.routes();
    }

    bootstrap() {
        this.app.use(cors())
        getConnectionMongo();
    }

    routes() {
        this.app.use(routes);
    }

    getApp() {
        return this.app;
    }

}

export default new Server().getApp();
