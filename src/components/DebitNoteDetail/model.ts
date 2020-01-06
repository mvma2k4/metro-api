import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection-pg';
import * as crypto from 'crypto';
//import { Document, Schema } from 'mongoose';
import { Model, DataTypes, BuildOptions, CreateOptions } from 'sequelize';
import { NextFunction } from 'express';
import { sequelize } from '../../config/connection/connection-pg';
import { PermissionModel } from '../Permission/model';
import { Double } from 'bson';
import { Json } from 'sequelize/types/lib/utils';

/**
 * @export
 * @interface IDebitNoteDetailModel
 * @extends {Document}
 */
export interface IDebitNoteDetailModel extends Model {
    
    debitnote_uuid: string;
    
    service_info_uuid: string;
    
    unit_price: number;
    count: number;
    total: number;

    permission_uuid:string;
    
    tokens: AuthToken[];
}

export type IDebitNoteDetailModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IDebitNoteDetailModel;
  }

export type AuthToken = {
    accessToken: string,
    kind: string
};


export const DebitNoteDetailModel = <IDebitNoteDetailModelStatic>sequelize.define('debitnote_detail', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },

    debitnote_uuid: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    
    service_info_uuid: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    
    unit_price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    count: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },

    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

DebitNoteDetailModel.hasOne(PermissionModel, { foreignKey: 'uuid'})

