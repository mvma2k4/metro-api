import * as Joi from 'joi';
import { ClientModel, IClientModel } from './model';
import ClientValidation from './validation';
import { IClientService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IClientModelService}
 */
const ClientService: IClientService = {
    /**
     * @returns {Promise < IClientModel[] >}
     * @memberof ClientService
     */
    async findAll(): Promise < IClientModel[] > {
        try {
            return await ClientModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IClientModel >}
     * @memberof ClientService
     */
    async findOne(id: string): Promise < IClientModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ClientValidation.getClient({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ClientModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IClientModel} body
     * @returns {Promise < IClientModel >}
     * @memberof ClientService
     */
    async updateOne(id: string, body: IClientModel): Promise < IClientModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ClientValidation.getClient({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ClientModel.update(
                { fullname: body.name },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedClient] ]) => {
                return updatedClient
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IClientModel} Client
     * @returns {Promise < IClientModel >}
     * @memberof ClientService
     */
    async insert(body: IClientModel): Promise < IClientModel > {
        try {
            const validate: Joi.ValidationResult < IClientModel > = ClientValidation.createClient(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Client: IClientModel = await ClientModel.create(body);

            return Client;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IClientModel >}
     * @memberof ClientService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ClientValidation.removeClient({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const Client = await ClientModel.findByPk(id).then((ClientFound)=>{
               return ClientFound.destroy();
            });
            return Client;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ClientService;
