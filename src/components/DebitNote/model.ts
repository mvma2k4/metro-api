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
 * @interface IDebitNoteModel
 * @extends {Document}
 */
export interface IDebitNoteModel extends Model {
    code: string;
    clientName: string;
    client_uuid: string;
    providerName: string;
    provider_uuid: string;
    
    counterName: string;
    counter_uuid: string;
    passenger: Text;
    service: Text;
    voucher: Text;

    concept: Text;

    current_date: Date;
    expiration_date: Date;

    change: number;
    amount_dollar: number;
    amount_currency: number;

    settlement: Json;

    state:number;

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


export const DebitNoteModel = <IDebitNoteModelStatic>sequelize.define('debit', {
    uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },

    
    code: {
        type: DataTypes.STRING(128),
        unique: true,
    },
    clientName: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    client_uuid: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    providerName: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    provider_uuid: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    counterName: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    counter_uuid: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },

    passenger: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    service: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    voucher: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    concept: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    current_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    expiration_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    change: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    amount_dollar: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    amount_currency: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },

    settlement: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    
    tokens: DataTypes.ARRAY(DataTypes.TEXT),
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull:true
    }
});

DebitNoteModel.hasOne(PermissionModel, { foreignKey: 'permission_uuid'})

