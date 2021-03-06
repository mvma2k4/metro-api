import * as express from 'express';
import * as http from 'http';
import * as jwtConfig from '../config/middleware/jwtAuth';
import * as swaggerUi from 'swagger-ui-express';
import AuthRouter from './AuthRouter';
import UserRouter from './UserRouter';
import CounterRouter from './CounterRouter';
import ClientRouter from './ClientRouter';
import ProviderRouter from './ProviderRouter';
import PermissionRouter from './PermissionRouter';
import DebitNoteRouter from './DebitNoteRouter';
import DebitNoteDetailRouter from './DebitNoteDetailRouter';
import FeesInfoFieldRouter from './FeesInfoFieldRouter';
import ServiceClientFeesRouter from './ServiceClientFeesRouter';
import ServiceInfoRouter from './ServiceInfoRouter';
import ServiceTypeRouter from './ServiceTypeRouter';
import ServiceTypeFieldRouter from './ServiceTypeFieldRouter';
let swaggerDoc: Object;

try {
    swaggerDoc = require('../../swagger.json');
} catch (error) {
    console.log('***************************************************');
    console.log('  Seems like you doesn\`t have swagger.json file');
    console.log('  Please, run: ');
    console.log('  $ swagger-jsdoc -d swaggerDef.js -o swagger.json');
    console.log('***************************************************');
}

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    /**
     * @description
     *  Forwards any requests to the /v1/users URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/users', jwtConfig.isAuthenticated, UserRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/counters URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/counters', jwtConfig.isAuthenticated, CounterRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/clients URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/clients', jwtConfig.isAuthenticated, ClientRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/feesfield URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/feesfield', jwtConfig.isAuthenticated, FeesInfoFieldRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/provider URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/providers', jwtConfig.isAuthenticated, ProviderRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/debit URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/debitnotes', jwtConfig.isAuthenticated, DebitNoteRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/debitdetail URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/debitnotedetail', jwtConfig.isAuthenticated, DebitNoteDetailRouter);

     /**
     * @description
     *  Forwards any requests to the /v1/clientfees URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/clientfees', jwtConfig.isAuthenticated, ServiceClientFeesRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/service URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/service', jwtConfig.isAuthenticated, ServiceInfoRouter);

    /**
     * @description
     *  Forwards any requests to the /v1/servicetype URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/servicetype', jwtConfig.isAuthenticated, ServiceTypeRouter);

     /**
     * @description
     *  Forwards any requests to the /v1/servicetypefield URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/servicetypefield', jwtConfig.isAuthenticated, ServiceTypeFieldRouter);

     /**
     * @description
     *  Forwards any requests to the /v1/permissions URI to our PermissionRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/permissions', jwtConfig.isAuthenticated, PermissionRouter);

    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter);

    /**
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    if (swaggerDoc) {
        app.use('/docs', swaggerUi.serve);
        app.get('/docs', swaggerUi.setup(swaggerDoc));
    } else {
        app.get('/docs', (req, res) => {
            res.send('<p>Seems like you doesn\'t have <code>swagger.json</code> file.</p>' +
                '<p>For generate doc file use: <code>swagger-jsdoc -d swaggerDef.js -o swagger.json</code> in terminal</p>' +
                '<p>Then, restart your application</p>');
        });
    }

    /** 
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @constructs all routes
     */
    app.use(router);
}
