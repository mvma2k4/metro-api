import * as Joi from 'joi';
import { ProviderModel, IProviderModel } from './model';
import ProviderValidation from './validation';
import { IProviderService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IProviderModelService}
 */
const ProviderService: IProviderService = {
    /**
     * @returns {Promise < IProviderModel[] >}
     * @memberof ProviderService
     */
    async findAll(): Promise < IProviderModel[] > {
        try {
            return await ProviderModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IProviderModel >}
     * @memberof ProviderService
     */
    async findOne(id: string): Promise < IProviderModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ProviderValidation.getProvider({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ProviderModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IProviderModel} body
     * @returns {Promise < IProviderModel >}
     * @memberof ProviderService
     */
    async updateOne(id: string, body: IProviderModel): Promise < IProviderModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ProviderValidation.getProvider({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ProviderModel.update(
                { fullname: body.name },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedProvider] ]) => {
                return updatedProvider
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IProviderModel} Provider
     * @returns {Promise < IProviderModel >}
     * @memberof ProviderService
     */
    async insert(body: IProviderModel): Promise < IProviderModel > {
        try {
            const validate: Joi.ValidationResult < IProviderModel > = ProviderValidation.createProvider(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Provider: IProviderModel = await ProviderModel.create(body);

            return Provider;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IProviderModel >}
     * @memberof ProviderService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ProviderValidation.removeProvider({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const Provider = await ProviderModel.findByPk(id).then((ProviderFound)=>{
               return ProviderFound.destroy();
            });
            return Provider;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ProviderService;
