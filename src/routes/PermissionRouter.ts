import { Router } from 'express';
import { PermissionComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/permissions
 * 
 * @swagger
 * /v1/permissions:
 *   get:
 *     description: Get all stored permissions in Database
 *     tags: ["permissions"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of permissions
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/permissions'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', PermissionComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/permissions
 * 
 * @swagger
 * /v1/permissions:
 *   post:
 *      description: Create new User
 *      tags: ["permissions"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/permissionschema'
 *            example:
 *              name: userName
 *              email: test.user@mail.com
 *      responses:
 *        201:
 *          description: return created user
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/permissionschema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', PermissionComponent.create);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/permissions/:id
 * 
 * @swagger
 * /v1/permissions/{id}:
 *  get:
 *    description: Get user by userId
 *    tags: ["permissions"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return user by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/permissionschema'
 */
router.get('/:id', PermissionComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/permissions/:id
 * 
 * @swagger
 * /v1/permissions/{id}:
 *  delete:
 *    description: Delete user by userId
 *    tags: ["permissions"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted user
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/permissionschema'
 */
router.delete('/:id', PermissionComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
