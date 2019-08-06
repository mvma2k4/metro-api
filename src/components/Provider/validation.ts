import * as Joi from 'joi';
import Validation from '../validation';
import { IProviderModel } from './model';

/**
 * @export
 * @class ProviderValidation
 * @extends Validation
 */
class ProviderValidation extends Validation {

    /**
     * Creates an instance of ProviderValidation.
     * @memberof ProviderValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IProviderModel} params
     * @returns {Joi.ValidationResult<IProviderModel >}
     * @memberof ProviderValidation
     */
    createProvider(
        params: IProviderModel
    ): Joi.ValidationResult < IProviderModel > {
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
     * @memberof ProviderValidation
     */
    getProvider(
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
     * @memberof ProviderValidation
     */
    removeProvider(
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

export default new ProviderValidation();
