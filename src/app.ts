import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const port = config.get<number>('port'); // if you look inside get, you see that it take generic type, so we declare it is number

const app = express();

app.use(express.json());

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
});
