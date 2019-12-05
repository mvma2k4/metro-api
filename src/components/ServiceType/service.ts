import * as Joi from 'joi';
import { ServiceTypeModel, IServiceTypeModel } from './model';
import ServiceTypeValidation from './validation';
import { IServiceTypeService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IServiceTypeModelService}
 */
const ServiceTypeService: IServiceTypeService = {
    /**
     * @returns {Promise < IServiceTypeModel[] >}
     * @memberof ServiceTypeService
     */
    async findAll(): Promise < IServiceTypeModel[] > {
        try {
            return await ServiceTypeModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IServiceTypeModel >}
     * @memberof ServiceTypeService
     */
    async findOne(id: string): Promise < IServiceTypeModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceTypeValidation.getServiceType({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceTypeModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IServiceTypeModel} body
     * @returns {Promise < IServiceTypeModel >}
     * @memberof ServiceTypeService
     */
    async updateOne(id: string, body: IServiceTypeModel): Promise < IServiceTypeModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceTypeValidation.getServiceType({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceTypeModel.update(
                { name: body.name },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedServiceType] ]) => {
                return updatedServiceType
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IServiceTypeModel} ServiceType
     * @returns {Promise < IServiceTypeModel >}
     * @memberof ServiceTypeService
     */
    async insert(body: IServiceTypeModel): Promise < IServiceTypeModel > {
        try {
            const validate: Joi.ValidationResult < IServiceTypeModel > = ServiceTypeValidation.createServiceType(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const ServiceType: IServiceTypeModel = await ServiceTypeModel.create(body);

            return ServiceType;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IServiceTypeModel >}
     * @memberof ServiceTypeService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceTypeValidation.removeServiceType({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const ServiceType = await ServiceTypeModel.findByPk(id).then((ServiceTypeFound)=>{
               return ServiceTypeFound.destroy();
            });
            return ServiceType;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ServiceTypeService;
