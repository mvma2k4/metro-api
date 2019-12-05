import * as Joi from 'joi';
import { ServiceTypeFieldModel, IServiceTypeFieldModel } from './model';
import ServiceTypeFieldValidation from './validation';
import { IServiceTypeFieldService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IServiceTypeFieldModelService}
 */
const ServiceTypeFieldService: IServiceTypeFieldService = {
    /**
     * @returns {Promise < IServiceTypeFieldModel[] >}
     * @memberof ServiceTypeFieldService
     */
    async findAll(): Promise < IServiceTypeFieldModel[] > {
        try {
            return await ServiceTypeFieldModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IServiceTypeFieldModel >}
     * @memberof ServiceTypeFieldService
     */
    async findOne(id: string): Promise < IServiceTypeFieldModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceTypeFieldValidation.getServiceTypeField({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceTypeFieldModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IServiceTypeFieldModel} body
     * @returns {Promise < IServiceTypeFieldModel >}
     * @memberof ServiceTypeFieldService
     */
    async updateOne(id: string, body: IServiceTypeFieldModel): Promise < IServiceTypeFieldModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceTypeFieldValidation.getServiceTypeField({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceTypeFieldModel.update(
                { name: body.name,
                  label: body.label,
                  data_type: body.data_type,
                  service_type_uuid: body.service_type_uuid },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedServiceTypeField] ]) => {
                return updatedServiceTypeField
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IServiceTypeFieldModel} ServiceTypeField
     * @returns {Promise < IServiceTypeFieldModel >}
     * @memberof ServiceTypeFieldService
     */
    async insert(body: IServiceTypeFieldModel): Promise < IServiceTypeFieldModel > {
        try {
            const validate: Joi.ValidationResult < IServiceTypeFieldModel > = ServiceTypeFieldValidation.createServiceTypeField(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const ServiceTypeField: IServiceTypeFieldModel = await ServiceTypeFieldModel.create(body);

            return ServiceTypeField;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IServiceTypeFieldModel >}
     * @memberof ServiceTypeFieldService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceTypeFieldValidation.removeServiceTypeField({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const ServiceTypeField = await ServiceTypeFieldModel.findByPk(id).then((ServiceTypeFieldFound)=>{
               return ServiceTypeFieldFound.destroy();
            });
            return ServiceTypeField;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ServiceTypeFieldService;
