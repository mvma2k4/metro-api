import { Router } from 'express';
import { ClientComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/counters
 * 
 * @swagger
 * /v1/Clients:
 *   get:
 *     description: Get all stored Clients in Database
 *     tags: ["Clients"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of Clients
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Clients'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', ClientComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/counters
 * 
 * @swagger
 * /v1/Clients:
 *   post:
 *      description: Create new Client
 *      tags: ["Clients"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: Client creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientSchema'
 *            example:
 *              name: ClientName
 *              email: test.Client@mail.com
 *      responses:
 *        201:
 *          description: return created Client
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ClientSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', ClientComponent.create);

/**
 * PUT method route
 * @example http://localhost:PORT/v1/counters
 * 
 * @swagger
 * /v1/Clients:
 *   post:
 *      description: Create new Client
 *      tags: ["Clients"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: Client creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientSchema'
 *            example:
 *              name: ClientName
 *              email: test.Client@mail.com
 *      responses:
 *        201:
 *          description: return created Client
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ClientSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.put('/', ClientComponent.update);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/counters/:id
 * 
 * @swagger
 * /v1/Clients/{id}:
 *  get:
 *    description: Get Client by ClientId
 *    tags: ["Clients"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique ClientId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return Client by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ClientSchema'
 */
router.get('/:id', ClientComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/counters/:id
 * 
 * @swagger
 * /v1/Clients/{id}:
 *  delete:
 *    description: Delete Client by ClientId
 *    tags: ["Clients"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique ClientId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted Client
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ClientSchema'
 */
router.delete('/:id', ClientComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
