import * as Joi from 'joi';
import { ServiceInfoModel, IServiceInfoModel } from './model';
import ServiceInfoValidation from './validation';
import { IServiceInfoService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IServiceInfoModelService}
 */
const ServiceInfoService: IServiceInfoService = {
    /**
     * @returns {Promise < IServiceInfoModel[] >}
     * @memberof ServiceInfoService
     */
    async findAll(): Promise < IServiceInfoModel[] > {
        try {
            return await ServiceInfoModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IServiceInfoModel >}
     * @memberof ServiceInfoService
     */
    async findOne(id: string): Promise < IServiceInfoModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceInfoValidation.getServiceInfo({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceInfoModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IServiceInfoModel} body
     * @returns {Promise < IServiceInfoModel >}
     * @memberof ServiceInfoService
     */
    async updateOne(id: string, body: IServiceInfoModel): Promise < IServiceInfoModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceInfoValidation.getServiceInfo({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ServiceInfoModel.update(
                { description: body.description,
                  provider_uuid: body.provider_uuid,
                  provider_name: body.provider_name,
                  service_type_uuid: body.service_type_uuid,
                  base_price: body.base_price },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedServiceInfo] ]) => {
                return updatedServiceInfo
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IServiceInfoModel} ServiceInfo
     * @returns {Promise < IServiceInfoModel >}
     * @memberof ServiceInfoService
     */
    async insert(body: IServiceInfoModel): Promise < IServiceInfoModel > {
        try {
            const validate: Joi.ValidationResult < IServiceInfoModel > = ServiceInfoValidation.createServiceInfo(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const ServiceInfo: IServiceInfoModel = await ServiceInfoModel.create(body);

            return ServiceInfo;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IServiceInfoModel >}
     * @memberof ServiceInfoService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ServiceInfoValidation.removeServiceInfo({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const ServiceInfo = await ServiceInfoModel.findByPk(id).then((ServiceInfoFound)=>{
               return ServiceInfoFound.destroy();
            });
            return ServiceInfo;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ServiceInfoService;
