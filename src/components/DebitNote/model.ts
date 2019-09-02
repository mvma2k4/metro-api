import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection-pg';
import * as crypto from 'crypto';
//import { Document, Schema } from 'mongoose';
import { Model, DataTypes, BuildOptions, CreateOptions } from 'sequelize';
import { NextFunction } from 'express';
import { sequelize } from '../../config/connection/connection-pg';
import { PermissionModel } from '../Permission/model';

/**
 * @export
 * @interface IDebitNoteModel
 * @extends {Document}
 */
export interface IDebitNoteModel extends Model {
    address: string;
    perc: number;
    name: string;
    phone: string;
    permission_uuid:string;

    tokens: AuthToken[];
}

export type IDebitNoteModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IDebitNoteModel;
  }

export type AuthToken = {
    accessToken: string,
    kind: string
};

/**
 * @swagger
 * components:
 *  schemas:
 *    DebitNoteSchema:
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
 *    DebitNotes:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/DebitNoteSchema'
 */
export const DebitNoteModel = <IDebitNoteModelStatic>sequelize.define('provider', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    address: {
        type: DataTypes.STRING(128),
        unique: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(128),
    allowNull: false,
},
    perc: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    
    tokens: DataTypes.ARRAY(DataTypes.TEXT),
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

DebitNoteModel.hasOne(PermissionModel, { foreignKey: 'permission_uuid'})

