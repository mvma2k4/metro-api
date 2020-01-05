import * as Joi from 'joi';
import { FeesInfoFieldModel, IFeesInfoFieldModel } from './model';
import FeesInfoFieldValidation from './validation';
import { IFeesInfoFieldService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IFeesInfoFieldModelService}
 */
const FeesInfoFieldService: IFeesInfoFieldService = {
    /**
     * @returns {Promise < IFeesInfoFieldModel[] >}
     * @memberof FeesInfoFieldService
     */
    async findAll(): Promise < IFeesInfoFieldModel[] > {
        try {
            return await FeesInfoFieldModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IFeesInfoFieldModel >}
     * @memberof FeesInfoFieldService
     */
    async findOne(id: string): Promise < IFeesInfoFieldModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = FeesInfoFieldValidation.getFeesInfoField({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await FeesInfoFieldModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IFeesInfoFieldModel} body
     * @returns {Promise < IFeesInfoFieldModel >}
     * @memberof FeesInfoFieldService
     */
    async updateOne(id: string, body: IFeesInfoFieldModel): Promise < IFeesInfoFieldModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = FeesInfoFieldValidation.getFeesInfoField({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await FeesInfoFieldModel.update(
                { name: body.name,
                  percentage: body.percentage,
                  service_client_fees_uuid: body.service_client_fees_uuid },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedFeesInfoField] ]) => {
                return updatedFeesInfoField
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IFeesInfoFieldModel} FeesInfoField
     * @returns {Promise < IFeesInfoFieldModel >}
     * @memberof FeesInfoFieldService
     */
    async insert(body: IFeesInfoFieldModel): Promise < IFeesInfoFieldModel > {
        try {
            const validate: Joi.ValidationResult < IFeesInfoFieldModel > = FeesInfoFieldValidation.createFeesInfoField(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const FeesInfoField: IFeesInfoFieldModel = await FeesInfoFieldModel.create(body);

            return FeesInfoField;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IFeesInfoFieldModel >}
     * @memberof FeesInfoFieldService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = FeesInfoFieldValidation.removeFeesInfoField({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const FeesInfoField = await FeesInfoFieldModel.findByPk(id).then((FeesInfoFieldFound)=>{
               return FeesInfoFieldFound.destroy();
            });
            return FeesInfoField;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default FeesInfoFieldService;
