import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection-pg';
import * as crypto from 'crypto';
//import { Document, Schema } from 'mongoose';
import { Model, DataTypes, BuildOptions, CreateOptions } from 'sequelize';
import { NextFunction } from 'express';
import { sequelize } from '../../config/connection/connection-pg';
import { PermissionModel } from '../Permission/model';
import { ClientModel } from '../Client/model';

/**
 * @export
 * @interface ICounterModel
 * @extends {Document}
 */
export interface ICounterModel extends Model {
    email: string;
    name: string;
    permission_uuid:string;
    client_uuid: string;
    tokens: AuthToken[];
}

export type ICounterModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ICounterModel;
  }

export type AuthToken = {
    accessToken: string,
    kind: string
};

export const CounterModel = <ICounterModelStatic>sequelize.define('counter', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
  },
    
    tokens: DataTypes.ARRAY(DataTypes.TEXT),
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    },
    client_uuid: {
        type: DataTypes.UUID,
        allowNull:true
      }
});

CounterModel.hasOne(PermissionModel, { foreignKey: 'uuid'})
CounterModel.hasOne(ClientModel, { foreignKey: 'uuid'})

