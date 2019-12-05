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
 * @interface IServiceTypeFieldModel
 * @extends {Document}
 */
export interface IServiceTypeFieldModel extends Model {
    name: string;
    label: string;
    data_type: string;
    service_type_uuid: string;
    permission_uuid:string;

    tokens: AuthToken[];
}

export type IServiceTypeFieldModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IServiceTypeFieldModel;
  }

export type AuthToken = {
    accessToken: string,
    kind: string
};


export const ServiceTypeFieldModel = <IServiceTypeFieldModelStatic>sequelize.define('service_type_field ', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    label: {
        type: DataTypes.STRING(128),
        allowNull: false,},
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
  },
  data_type: {
    type: DataTypes.STRING(128),
    allowNull: false,
    },
    tokens: DataTypes.ARRAY(DataTypes.TEXT),
    service_type_uuid: {
        type: DataTypes.UUID,
        allowNull:true
      },
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

ServiceTypeFieldModel.hasOne(PermissionModel, { foreignKey: 'uuid'})

