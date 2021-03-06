import { Router } from 'express';
import { CounterComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/counters
 * 
 * @swagger
 * /v1/Counters:
 *   get:
 *     description: Get all stored Counters in Database
 *     tags: ["Counters"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of Counters
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Counters'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', CounterComponent.findAll);

router.get('/client/:id', CounterComponent.findAllByClient);

/**
 * POST method route
 * @example http://localhost:PORT/v1/counters
 * 
 * @swagger
 * /v1/Counters:
 *   post:
 *      description: Create new Counter
 *      tags: ["Counters"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: Counter creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CounterSchema'
 *            example:
 *              name: CounterName
 *              email: test.Counter@mail.com
 *      responses:
 *        201:
 *          description: return created Counter
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CounterSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', CounterComponent.create);

/**
 * PUT method route
 * @example http://localhost:PORT/v1/counters
 * 
 * @swagger
 * /v1/Counters:
 *   post:
 *      description: Create new Counter
 *      tags: ["Counters"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: Counter creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CounterSchema'
 *            example:
 *              name: CounterName
 *              email: test.Counter@mail.com
 *      responses:
 *        201:
 *          description: return created Counter
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CounterSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.put('/', CounterComponent.update);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/counters/:id
 * 
 * @swagger
 * /v1/Counters/{id}:
 *  get:
 *    description: Get Counter by CounterId
 *    tags: ["Counters"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique CounterId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return Counter by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CounterSchema'
 */
router.get('/:id', CounterComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/counters/:id
 * 
 * @swagger
 * /v1/Counters/{id}:
 *  delete:
 *    description: Delete Counter by CounterId
 *    tags: ["Counters"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique CounterId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted Counter
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CounterSchema'
 */
router.delete('/:id', CounterComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
