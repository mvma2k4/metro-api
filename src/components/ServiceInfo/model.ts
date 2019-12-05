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
 * @interface IServiceInfoModel
 * @extends {Document}
 */
export interface IServiceInfoModel extends Model {
  
    description: string;
    provider_name: string;
    provider_uuid: string;
    service_type_uuid: string;
    base_price: Number
    permission_uuid:string;

    tokens: AuthToken[];
}

export type IServiceInfoModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IServiceInfoModel;
  }

export type AuthToken = {
    accessToken: string,
    kind: string
};


export const ServiceInfoModel = <IServiceInfoModelStatic>sequelize.define('service_type_field ', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.STRING(128),
        allowNull: false,},
    provider_name: {
      type: DataTypes.STRING(128),
      allowNull: false,
  },
  provider_uuid: {
    type: DataTypes.UUID,
    allowNull:true
  },

  service_type_uuid: {
    type: DataTypes.UUID,
    allowNull:true
  },
  base_price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
    tokens: DataTypes.ARRAY(DataTypes.TEXT),
    
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

ServiceInfoModel.hasOne(PermissionModel, { foreignKey: 'uuid'})

