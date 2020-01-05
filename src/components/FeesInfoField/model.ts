import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection-pg';
import * as crypto from 'crypto';
//import { Document, Schema } from 'mongoose';
import { Model, DataTypes, BuildOptions, CreateOptions } from 'sequelize';
import { NextFunction } from 'express';
import { sequelize } from '../../config/connection/connection-pg';
import { PermissionModel } from '../Permission/model';
import { ServiceClientFeesModel } from '../ServiceClientFees/model';
import { FeesInfoFieldComponent } from '..';

/**
 * @export
 * @interface IFeesInfoFieldModel
 * @extends {Document}
 */
export interface IFeesInfoFieldModel extends Model {
    name: string;
    percentage: number;
    service_client_fees_uuid: string;
    permission_uuid:string;
}

export type IFeesInfoFieldModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IFeesInfoFieldModel;
  }


export const FeesInfoFieldModel = <IFeesInfoFieldModelStatic>sequelize.define('fees_info_field', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,},
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
  },
  service_client_fees_uuid: {
        type: DataTypes.UUID,
        allowNull:true
      },
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

FeesInfoFieldModel.hasOne(PermissionModel, { foreignKey: 'uuid'});

