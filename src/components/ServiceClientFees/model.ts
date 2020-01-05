import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection-pg';
import * as crypto from 'crypto';
//import { Document, Schema } from 'mongoose';
import { Model, DataTypes, BuildOptions, CreateOptions } from 'sequelize';
import { NextFunction } from 'express';
import { sequelize } from '../../config/connection/connection-pg';
import { PermissionModel } from '../Permission/model';
import { FeesInfoFieldModel } from '../FeesInfoField/model';

/**
 * @export
 * @interface IServiceClientFeesModel
 * @extends {Document}
 */
export interface IServiceClientFeesModel extends Model {
    description: string;
    service_info_uuid: string;
    client_uuid: string;
    permission_uuid:string;

}

export type IServiceClientFeesModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IServiceClientFeesModel;
  }


export const ServiceClientFeesModel = <IServiceClientFeesModelStatic>sequelize.define('service_client_fees', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
  },    
  service_info_uuid: {
    type: DataTypes.UUID,
    allowNull:true
  },
  client_uuid: {
    type: DataTypes.UUID,
    allowNull:true
  },
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

ServiceClientFeesModel.hasOne(PermissionModel, { foreignKey: 'uuid'});
