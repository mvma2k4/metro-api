import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        DB_URI: string;
        DB_DB_MAIN: string;
    };
    secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        DB_URI: process.env.DB_URI || 'postgres://metrouser:P4ssw0rd@localhost:5432/',
        DB_DB_MAIN: process.env.DB_DB_MAIN || 'metro-db'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const production: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        DB_URI: process.env.DB_URI || 'postgres://oyduwnotbnmomt:e60bd887112eb3c6d61d9c41431fe0d4241ce36f970f1526677a7f33a5727778@ec2-54-235-167-210.compute-1.amazonaws.com:5432/',
        DB_DB_MAIN: process.env.DB_DB_MAIN || 'dbkprlm0rb1sse'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const test: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        DB_URI: process.env.DB_URI || 'postgres://metrouser:P4ssw0rd@localhost:5432/',
        DB_DB_MAIN: 'test_users_db'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const config: {
    [name: string]: IConfig
} = {
    test,
    development,
    production
};

export default config[NODE_ENV];
