import * as Joi from 'joi';
import { ServiceClientFeesModel, IServiceClientFeesModel } from './model';
import ServiceClientFeesValidation from './validation';
import { IServiceClientFeesService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IServiceClientFeesModelService}
 */
const ServiceClientFeesService: IServiceClientFeesService = {
    /**
     * @returns {Promise < IServiceClientFeesModel[] >}
     * @memberof ServiceClientFeesService
     */
    async findAll(): Promise < IServiceClientFeesModel[] > {
        try {
            return await ServiceClientFeesModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IServiceClientFeesModel >}
     * @memberof ServiceClientFeesService
     */
    async findOne(id: string): Promise < IServiceClientFeesModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceClientFeesValidation.getServiceClientFees({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceClientFeesModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IServiceClientFeesModel} body
     * @returns {Promise < IServiceClientFeesModel >}
     * @memberof ServiceClientFeesService
     */
    async updateOne(id: string, body: IServiceClientFeesModel): Promise < IServiceClientFeesModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceClientFeesValidation.getServiceClientFees({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceClientFeesModel.update(
                { description: body.description },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedServiceClientFees] ]) => {
                return updatedServiceClientFees
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IServiceClientFeesModel} ServiceClientFees
     * @returns {Promise < IServiceClientFeesModel >}
     * @memberof ServiceClientFeesService
     */
    async insert(body: IServiceClientFeesModel): Promise < IServiceClientFeesModel > {
        try {
            const validate: Joi.ValidationResult < IServiceClientFeesModel > = ServiceClientFeesValidation.createServiceClientFees(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const ServiceClientFees: IServiceClientFeesModel = await ServiceClientFeesModel.create(body);

            return ServiceClientFees;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IServiceClientFeesModel >}
     * @memberof ServiceClientFeesService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceClientFeesValidation.removeServiceClientFees({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const ServiceClientFees = await ServiceClientFeesModel.findByPk(id).then((ServiceClientFeesFound)=>{
               return ServiceClientFeesFound.destroy();
            });
            return ServiceClientFees;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ServiceClientFeesService;
