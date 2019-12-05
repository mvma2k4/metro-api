import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection-pg';
import * as crypto from 'crypto';
//import { Document, Schema } from 'mongoose';
import { Model, DataTypes, BuildOptions, CreateOptions } from 'sequelize';
import { NextFunction } from 'express';
import { sequelize } from '../../config/connection/connection-pg';
import { PermissionModel } from '../Permission/model';
import { ServiceTypeFieldModel } from '../ServiceTypeField/model';

/**
 * @export
 * @interface IServiceTypeModel
 * @extends {Document}
 */
export interface IServiceTypeModel extends Model {
    name: string;
    permission_uuid:string;

    tokens: AuthToken[];
}

export type IServiceTypeModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IServiceTypeModel;
  }

export type AuthToken = {
    accessToken: string,
    kind: string
};


export const ServiceTypeModel = <IServiceTypeModelStatic>sequelize.define('service_type', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
  },
    tokens: DataTypes.ARRAY(DataTypes.TEXT),
    
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

ServiceTypeModel.hasOne(PermissionModel, { foreignKey: 'uuid'})
ServiceTypeModel.hasMany(ServiceTypeFieldModel)

