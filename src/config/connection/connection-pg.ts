import { Sequelize } from 'sequelize';
import config from '../env/index';

interface IConnectOptions {
    autoReconnect: boolean;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    loggerLevel ? : string;
    useNewUrlParser ? : boolean;
}

const connectOptions: IConnectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
};
// 'postgres://user:pass@example.com:5432/dbname'
const POSTGRES_URI: string = `${config.database.DB_URI}${config.database.DB_DB_MAIN}`;

export const sequelize = new Sequelize(POSTGRES_URI);

// MongoDB handlers
// db.on('connecting', () => {
//     console.log('\x1b[32m', 'MongoDB :: connecting');
// });

// db.on('error', (error) => {
//     console.log('\x1b[31m', `MongoDB :: connection ${error}`);
//     mongoose.disconnect();
// });

// db.on('connected', () => {
//     console.log('\x1b[32m', 'MongoDB :: connected');
// });

// db.once('open', () => {
//     console.log('\x1b[32m', 'MongoDB :: connection opened');
// });

// db.on('reconnected', () => {
//     console.log('\x1b[33m"', 'MongoDB :: reconnected');
// });

// db.on('reconnectFailed', () => {
//     console.log('\x1b[31m', 'MongoDB :: reconnectFailed');
// });

// db.on('disconnected', () => {
//     console.log('\x1b[31m', 'MongoDB :: disconnected');
// });

// db.on('fullsetup', () => {
//     console.log('\x1b[33m"', 'MongoDB :: reconnecting... %d');
// });
