import { Model, DataTypes, BuildOptions, CreateOptions } from 'sequelize';
import { NextFunction } from 'express';
import { sequelize } from '../../config/connection/connection-pg';
import { Json } from 'sequelize/types/lib/utils';

/**
 * @export
 * @interface IPermissionModel
 * @extends {Document}
 */
export interface IPermissionModel extends Model {
    features: Json;
    modules: Json;
}

export type IPermissionModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IPermissionModel;
  }

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
 *        - email
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        passwordResetToken:
 *          type: string
 *        passwordResetExpires:
 *          type: string
 *          format: date
 *        tokens:
 *          type: array
 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UserSchema'
 */
export const PermissionModel = <IPermissionModelStatic>sequelize.define('permission', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    features: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    modules: {
        type: DataTypes.JSONB,
        allowNull: false
    }
});