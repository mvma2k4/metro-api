import * as Joi from 'joi';
import Validation from '../validation';
import { IClientModel } from './model';

/**
 * @export
 * @class ClientValidation
 * @extends Validation
 */
class ClientValidation extends Validation {

    /**
     * Creates an instance of ClientValidation.
     * @memberof ClientValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IClientModel} params
     * @returns {Joi.ValidationResult<IClientModel >}
     * @memberof ClientValidation
     */
    createClient(
        params: IClientModel
    ): Joi.ValidationResult < IClientModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            address: Joi.string().required(),
            phone: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ClientValidation
     */
    getClient(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.string().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ClientValidation
     */
    removeClient(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.string().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new ClientValidation();
